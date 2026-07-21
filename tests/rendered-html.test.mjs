import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the PrimeStudio 3M website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>PrimeStudio 3M — Mobile Games Made to Feel Alive<\/title>/i);
  assert.match(html, /We make/);
  assert.match(html, /Tap into a new world\./);
  assert.match(html, /playprimeaxe@gmail\.com/);
  assert.match(html, /5372052753712655713/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("keeps the finished site static and publication-ready", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Sticker Pop: Kids Coloring/);
  assert.match(page, /Pirate Cargo Jam/);
  assert.match(layout, /https:\/\/primestudio3m\.github\.io/);
  assert.match(layout, /\/og\.png/);
  assert.match(packageJson, /"build:pages": "next build"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await Promise.all([
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/games/sticker-pop.webp", import.meta.url)),
    access(new URL("../public/games/odyssey.webp", import.meta.url)),
    access(new URL("../.github/workflows/deploy.yml", import.meta.url)),
  ]);
});
