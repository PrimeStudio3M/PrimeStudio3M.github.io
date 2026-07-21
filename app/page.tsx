const PLAY_URL =
  "https://play.google.com/store/apps/dev?id=5372052753712655713";

const games = [
  {
    title: "Sticker Pop: Kids Coloring",
    description:
      "Color cute stickers by number and save animals, dinos, ABCs, and more in a playful album.",
    category: "Kids creative",
    image: "/games/sticker-pop.webp",
    href: "https://play.google.com/store/apps/details?id=com.primestudio.sticker.pop",
    accent: "yellow",
    number: "01",
  },
  {
    title: "Odyssey: Defenders of Hellas",
    description:
      "Lead Odysseus and wield divine powers in a tower defense adventure inspired by Greek mythology.",
    category: "Tower defense",
    image: "/games/odyssey.webp",
    href: "https://play.google.com/store/apps/details?id=com.primestudio.odysseyhellas",
    accent: "orange",
    number: "02",
  },
  {
    title: "Hidden Objects: Pirate Secrets",
    description:
      "Find hidden objects, explore pirate islands, and uncover secrets buried beyond the horizon.",
    category: "Hidden object",
    image: "/games/hidden-objects.webp",
    href: "https://play.google.com/store/apps/details?id=com.PrimeStudio.hidden.objects.pirate.secrets",
    accent: "blue",
    number: "03",
  },
  {
    title: "Pirate Cargo Jam",
    description:
      "Sort treasures, clear cargo jams, and solve clever matching puzzles across the seven seas.",
    category: "Casual puzzle",
    image: "/games/pirate-cargo.webp",
    href: "https://play.google.com/store/apps/details?id=com.PrimeStudio.pirate.cargo.jam",
    accent: "green",
    number: "04",
  },
  {
    title: "Mahjong Collection: Tile Game",
    description:
      "A relaxing collection of classic, color, connect, sound, and triple tile-matching modes.",
    category: "Tile & relax",
    image: "/games/mahjong.webp",
    href: "https://play.google.com/store/apps/details?id=com.PrimeStudio.mahjong.collection",
    accent: "pink",
    number: "05",
  },
  {
    title: "Zone Clash: Territory Wars 3D",
    description:
      "Draw trails, capture territory, and outsmart rivals in fast, colorful 3D arena battles.",
    category: "Arcade 3D",
    image: "/games/zone-clash.webp",
    href: "https://play.google.com/store/apps/details?id=com.PrimeStudio.zone.clash.territory.wars",
    accent: "violet",
    number: "06",
  },
];

const moreGames = [
  { title: "Kids Coloring Games", image: "/games/kids-coloring.webp" },
  { title: "Paper Folding Puzzle", image: "/games/paper-folding.webp" },
  { title: "Match 3D Blast", image: "/games/match-3d.webp" },
  { title: "Knight Cube Puzzle", image: "/games/knight-cube.webp" },
];

function GooglePlayLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={compact ? "play-link play-link--compact" : "play-link"}
      href={PLAY_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="View PrimeStudio 3M on Google Play"
    >
      <span className="play-triangle" aria-hidden="true" />
      <span>
        <small>Explore on</small>
        Google Play
      </span>
      <span className="link-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="PrimeStudio 3M home">
          <span className="brand-mark" aria-hidden="true">
            P3
          </span>
          <span>
            PrimeStudio <strong>3M</strong>
          </span>
        </a>

        <div className="nav-links">
          <a href="#games">Games</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="nav-cta"
          href={PLAY_URL}
          target="_blank"
          rel="noreferrer"
        >
          Google Play <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow--one" aria-hidden="true" />
        <div className="hero-glow hero-glow--two" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Independent game studio · Ukraine
          </p>
          <h1>
            We make
            <span className="hero-word hero-word--lime">play</span>
            feel <span className="hero-word hero-word--outline">alive.</span>
          </h1>
          <p className="hero-intro">
            Colorful mobile worlds, satisfying puzzles, and kid-friendly
            adventures made for the moments when you just want to play.
          </p>

          <div className="hero-actions">
            <GooglePlayLink />
            <a className="text-link" href="#games">
              Meet the games <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-stage" aria-label="A selection of PrimeStudio 3M games">
          <div className="stage-grid" aria-hidden="true" />
          <div className="stage-orbit stage-orbit--outer" aria-hidden="true" />
          <div className="stage-orbit stage-orbit--inner" aria-hidden="true" />

          <div className="phone-card">
            <div className="phone-top">
              <span />
              <span>PLAY MODE</span>
              <span />
            </div>
            <div className="phone-screen">
              <img
                src="/games/pirate-cargo-shot.webp"
                alt="Pirate Cargo Jam gameplay"
                fetchPriority="high"
              />
            </div>
            <div className="phone-caption">
              <span>Pirate Cargo Jam</span>
              <span aria-hidden="true">↗</span>
            </div>
          </div>

          <div className="floating-icon floating-icon--one">
            <img src="/games/odyssey.webp" alt="" />
          </div>
          <div className="floating-icon floating-icon--two">
            <img src="/games/sticker-pop.webp" alt="" />
          </div>
          <div className="floating-icon floating-icon--three">
            <img src="/games/zone-clash.webp" alt="" />
          </div>
          <div className="floating-icon floating-icon--four">
            <img src="/games/mahjong.webp" alt="" />
          </div>

          <div className="stage-stamp" aria-hidden="true">
            <span>FUN</span>
            <span>STARTS HERE</span>
          </div>
        </div>

        <div className="hero-foot">
          <p>Scroll to explore</p>
          <span className="scroll-line" aria-hidden="true" />
          <p>Mobile games · Puzzles · Kids</p>
        </div>
      </section>

      <section className="ticker" aria-label="Game genres">
        <div className="ticker-track">
          <span>PUZZLES</span><i>✦</i>
          <span>ADVENTURES</span><i>✦</i>
          <span>CREATIVITY</span><i>✦</i>
          <span>STRATEGY</span><i>✦</i>
          <span>PLAY FOR EVERYONE</span><i>✦</i>
          <span aria-hidden="true">PUZZLES</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">ADVENTURES</span><i aria-hidden="true">✦</i>
          <span aria-hidden="true">CREATIVITY</span><i aria-hidden="true">✦</i>
        </div>
      </section>

      <section className="games-section section-shell" id="games">
        <header className="section-header">
          <div>
            <p className="section-kicker">Selected releases</p>
            <h2>Tap into a new world.</h2>
          </div>
          <p>
            From relaxing tile matches to mythic defense and colorful kids’
            creativity, every game begins with one simple goal: make play feel
            good.
          </p>
        </header>

        <div className="games-grid">
          {games.map((game, index) => (
            <a
              className={`game-card game-card--${game.accent} ${index < 2 ? "game-card--feature" : ""}`}
              href={game.href}
              target="_blank"
              rel="noreferrer"
              key={game.title}
              aria-label={`${game.title} on Google Play`}
            >
              <div className="game-card-top">
                <span className="game-number">{game.number}</span>
                <span className="game-category">{game.category}</span>
                <span className="game-arrow" aria-hidden="true">↗</span>
              </div>

              <div className="game-visual">
                <span className="game-halo" aria-hidden="true" />
                <img src={game.image} alt={`${game.title} app icon`} loading="lazy" />
              </div>

              <div className="game-copy">
                <h3>{game.title}</h3>
                <p>{game.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="more-games">
          <div className="more-games-copy">
            <p className="section-kicker">And there’s more</p>
            <h3>One studio.<br />Many ways to play.</h3>
          </div>
          <div className="icon-stack" aria-label="More PrimeStudio 3M games">
            {moreGames.map((game, index) => (
              <div className="mini-game" key={game.title} style={{ "--i": index } as React.CSSProperties}>
                <img src={game.image} alt={`${game.title} app icon`} loading="lazy" />
                <span>{game.title}</span>
              </div>
            ))}
          </div>
          <GooglePlayLink compact />
        </div>
      </section>

      <section className="studio-section" id="studio">
        <div className="section-shell">
          <div className="studio-lead">
            <p className="section-kicker section-kicker--light">Our playbook</p>
            <h2>
              Built for the
              <span>one-more-level</span>
              feeling.
            </h2>
          </div>

          <div className="principles">
            <article>
              <span className="principle-number">01</span>
              <h3>Easy to enter</h3>
              <p>
                Clear ideas, intuitive controls, and satisfying feedback from
                the very first tap.
              </p>
            </article>
            <article>
              <span className="principle-number">02</span>
              <h3>Hard to put down</h3>
              <p>
                Smart challenges and polished progression that keep curiosity
                moving forward.
              </p>
            </article>
            <article>
              <span className="principle-number">03</span>
              <h3>Full of character</h3>
              <p>
                Bright worlds, expressive art, and playful details that turn a
                quick session into a small adventure.
              </p>
            </article>
          </div>
        </div>

        <div className="studio-stats">
          <div><strong>10+</strong><span>released games</span></div>
          <div><strong>Android</strong><span>our home platform</span></div>
          <div><strong>All ages</strong><span>playful by design</span></div>
          <div><strong>Independent</strong><span>small team, big energy</span></div>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-orb" aria-hidden="true">
          <span>3M</span>
        </div>
        <div className="contact-copy">
          <p className="section-kicker">Let’s talk</p>
          <h2>Have an idea,<br />a question, or<br />just want to say hi?</h2>
        </div>
        <div className="contact-action">
          <p>
            For support, partnerships, and everything in between, drop us a
            line. We read every message.
          </p>
          <a href="mailto:playprimeaxe@gmail.com">
            <span>playprimeaxe@gmail.com</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand brand--footer" href="#top">
          <span className="brand-mark" aria-hidden="true">P3</span>
          <span>PrimeStudio <strong>3M</strong></span>
        </a>
        <p>Fun starts here — let’s play.</p>
        <div className="footer-links">
          <a href={PLAY_URL} target="_blank" rel="noreferrer">Google Play ↗</a>
          <a href="mailto:playprimeaxe@gmail.com">Email</a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} PrimeStudio 3M</p>
      </footer>
    </main>
  );
}
