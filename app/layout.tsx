import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://primestudio3m.github.io"),
  title: "PrimeStudio 3M — Mobile Games Made to Feel Alive",
  description:
    "PrimeStudio 3M is an independent game studio creating colorful mobile puzzles, adventures, strategy games, and kid-friendly experiences for Android.",
  keywords: [
    "PrimeStudio 3M",
    "mobile games",
    "Android games",
    "puzzle games",
    "kids games",
    "indie game studio",
  ],
  authors: [{ name: "PrimeStudio 3M" }],
  openGraph: {
    title: "PrimeStudio 3M — We Make Play Feel Alive",
    description:
      "Colorful mobile worlds, satisfying puzzles, and playful adventures for Android.",
    url: "https://primestudio3m.github.io",
    siteName: "PrimeStudio 3M",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1747,
        height: 909,
        alt: "PrimeStudio 3M — We Make Play Feel Alive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeStudio 3M — We Make Play Feel Alive",
    description:
      "Colorful mobile worlds, satisfying puzzles, and playful adventures for Android.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
