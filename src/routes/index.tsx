import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, CirclePlay, Clock3, Compass, ExternalLink, Gamepad2, Globe2, Layers3, LockKeyhole, Menu, MoveUpRight, Sparkles, Target, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import gameverseHero from "@/assets/gameverse-portal.jpg";
import underwaterWorld from "@/assets/inspiration-underwater.jpg";
import crystalWorld from "@/assets/inspiration-crystal-forest.jpg";
import ecoWorld from "@/assets/inspiration-eco-city.jpg";
import puzzleWorld from "@/assets/inspiration-cosmic-puzzle.jpg";
import { challengeRules, creationJourney, eventConfig, eventSteps, faqs, fictionalModes, officialRules } from "@/features/gameverse/event-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gemini Gameverse | Game On Night — Imagine the Impossible" },
      { name: "description", content: "An online Gemini Ambassador creative game-concept night. Imagine an original world with Gemini, visualize it with Nano Banana, and pitch your idea in 60 seconds." },
      { property: "og:title", content: "Gemini Gameverse | Game On Night" },
      { property: "og:description", content: "Imagine an original game world with Gemini. Visualize it. Pitch it in 60 seconds." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GameversePage,
});

const registrationLinkProps = {
  href: eventConfig.registrationUrl,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

const inspiration = [
  { title: "The Sky Between Us", world: "Floating sky civilization", src: gameverseHero, alt: "Floating islands gathered around a glowing portal in a cosmic sky" },
  { title: "Abyssal Bloom", world: "Glowing underwater kingdom", src: underwaterWorld, alt: "Luminous underwater kingdom of domes, coral towers, and swimming fish" },
  { title: "The Last Prism", world: "Mysterious crystal forest", src: crystalWorld, alt: "A mysterious twilight forest with towering violet and cyan crystals" },
  { title: "A Greener Tomorrow", world: "Futuristic eco-city", src: ecoWorld, alt: "A hopeful future city of green towers, waterfalls, and clean energy" },
  { title: "Between Dimensions", world: "Cosmic puzzle dimension", src: puzzleWorld, alt: "Floating puzzle platforms and luminous portals in a cosmic dimension" },
] as const;

function GameversePage() {
  const reduceMotion = useReducedMotion();
  const [selectedMode, setSelectedMode] = useState<(typeof fictionalModes)[number]["id"]>("SOLO");
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeMode = fictionalModes.find((mode) => mode.id === selectedMode) ?? fictionalModes[0];
  const galleryItem = inspiration[galleryIndex];
  const staticMotion = reduceMotion ? {} : undefined;

  const scrollToChallenge = () => {
    document.getElementById("challenge")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  const setGallery = (direction: number) => {
    setGalleryIndex((current) => (current + direction + inspiration.length) % inspiration.length);
  };

  return (
    <main className="gameverse-shell">
      <div className="site-grid" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Gemini Gameverse home">
          <span className="brand-mark"><span>G</span></span>
          <span className="brand-wordmark">GEMINI <b>GAMEVERSE</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#challenge">The Challenge</a><a href="#process">How it Works</a><a href="#rules">Rules</a><a href="#faq">FAQ</a>
        </nav>
        <Button asChild className="nav-register"><a {...registrationLinkProps}>Register <ArrowUpRight aria-hidden="true" /></a></Button>
        <Button variant="ghost" size="icon" className="mobile-menu-toggle" aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setMobileMenuOpen((open) => !open)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
        {mobileMenuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{[["About", "about"], ["The Challenge", "challenge"], ["How it Works", "process"], ["Rules", "rules"], ["FAQ", "faq"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMobileMenuOpen(false)}>{label}<ArrowUpRight aria-hidden="true" /></a>)}<a {...registrationLinkProps} className="mobile-apply-link">Register now <ExternalLink aria-hidden="true" /></a></nav>}
      </header>

      <section id="home" className="hero-section">
        <img className="hero-art" src={gameverseHero} alt="A luminous portal links a floating island civilization across an expansive cosmic universe" width={1536} height={1024} fetchPriority="high" />
        <div className="hero-shading" />
        <div className="hero-portal-hud" aria-hidden="true"><span className="orbit orbit-outer" /><span className="orbit orbit-inner" /><span className="portal-cross">+</span><span className="portal-coordinate">SECTOR 07 · NO LIMITS</span></div>
        <div className="hero-content">
          <motion.div className="eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7 }}><span className="eyebrow-dot" /> THE GEMINI AMBASSADOR CREATIVE EVENT</motion.div>
          <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.1 }}>DON’T JUST<br />PLAY THE GAME.<br /><span>CREATE THE</span><br /><em>UNIVERSE.</em></motion.h1>
          <motion.div className="hero-tagline" initial={reduceMotion ? false : { opacity: 0 }} animate={reduceMotion ? undefined : { opacity: 1 }} transition={{ duration: 0.8, delay: 0.25 }}><span>ONE GOAL.</span><i /> <span>ONE ENEMY.</span><i /> <span>ONE DEADLINE.</span></motion.div>
          <p className="hero-description">An AI-powered game creation night. Imagine an original world with Gemini, bring it to life with Nano Banana, and pitch it to the arena.</p>
          <div className="hero-actions">
            <Button asChild className="button-cinematic"><a {...registrationLinkProps}>ENTER THE GAMEVERSE <ArrowUpRight aria-hidden="true" /></a></Button>
            <Button variant="ghost" className="button-explore" onClick={scrollToChallenge}><span className="explore-play"><CirclePlay aria-hidden="true" /></span> EXPLORE THE CHALLENGE</Button>
          </div>
          <div className="hero-footnote"><span className="online-label"><span className="online-pulse" /> ONLINE EVENT</span><span className="footnote-divider" /> <span className="capacity-label"><Users aria-hidden="true" /> A small arena: 30–50 expected</span></div>
        </div>
        <div className="hero-side-note" aria-hidden="true"><span>IMAGINE · CREATE · PITCH</span><span className="hero-side-line" /></div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" /></a>
      </section>

      <section id="about" className="intro-section content-section">
        <div className="section-kicker"><span>01</span><span className="kicker-rule" /> INSIDE THE GAMEVERSE</div>
        <div className="intro-grid">
          <h2>Your next game<br />starts as an <span>idea.</span></h2>
          <div className="intro-copy"><p>This is your night to invent—not code—a game concept nobody has played before. Give it a world. Give it an unforgettable mission. Then show everyone why it deserves to be played.</p><div className="intro-stamp"><Sparkles aria-hidden="true" /><span>MADE OF<br /><b>PURE IMAGINATION</b></span></div></div>
        </div>
        <div className="journey-grid">{creationJourney.map((step, index) => <motion.article key={step.number} className={`journey-item journey-color-${index + 1}`} initial={reduceMotion ? false : { opacity: 0, y: 26 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.24 }} transition={{ duration: 0.58, delay: index * 0.08 }}>
          <div className="journey-icon-wrap"><span className="journey-icon" aria-hidden="true">{step.symbol}</span><span className="journey-index">{step.number}</span></div><h3>{step.title}</h3><p>{step.detail}</p><span className="journey-connector" aria-hidden="true" />
        </motion.article>)}</div>
      </section>

      <section id="challenge" className="challenge-section content-section">
        <div className="section-kicker"><span>02</span><span className="kicker-rule" /> THE GAME DESIGN CHALLENGE</div>
        <div className="challenge-heading"><h2>ONE GOAL.<br /><span>ONE ENEMY.</span><br />ONE DEADLINE.</h2><div className="challenge-heading-aside"><Target aria-hidden="true" /><p>Three ingredients.<br />One unforgettable game.</p></div></div>
        <div className="challenge-grid">{challengeRules.map((rule, index) => <motion.article key={rule} className={`challenge-tile challenge-tile-${index + 1}`} initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }} whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5, delay: index * 0.11 }}>
          <span className="challenge-symbol" aria-hidden="true">{[<Target key="target" />, <Compass key="compass" />, <Clock3 key="clock" />][index]}</span><span className="tile-number">0{index + 1} / 03</span><h3>{["THE GOAL", "THE ENEMY", "THE DEADLINE"][index]}</h3><p>{rule}</p>
        </motion.article>)}</div>
        <div className="example-strip"><span className="example-chip"><Sparkles aria-hidden="true" /> FICTIONAL EXAMPLE</span><span className="example-title">Skybound: Last Light</span><p>Restore a drifting sky city before its final sunrise. Your only obstacle: a mischievous storm that rearranges the islands.</p><span className="example-caption">One possible starting point. Your universe should be entirely your own.</span></div>
      </section>

      <section className="modes-section content-section">
        <div className="section-kicker"><span>03</span><span className="kicker-rule" /> PICK A GAME MODE</div>
        <div className="modes-layout"><div className="modes-copy"><h2>Every world<br />plays <span>differently.</span></h2><p>Switch modes to spark a new kind of game idea. These are fictional concept modes only—every event participant takes part individually.</p><div className="modes-segment" role="tablist" aria-label="Fictional game concept modes">{fictionalModes.map((mode) => <Button key={mode.id} role="tab" aria-selected={selectedMode === mode.id} aria-controls="mode-panel" variant="ghost" className={selectedMode === mode.id ? "mode-tab mode-tab-active" : "mode-tab"} onClick={() => setSelectedMode(mode.id)}>{mode.title}</Button>)}</div><p className="fictional-notice"><Users aria-hidden="true" /> Fictional modes ≠ event team registration</p></div>
          <div id="mode-panel" className={`mode-world mode-world-${activeMode.color}`} role="tabpanel" aria-live="polite" aria-label={`${activeMode.title} fictional game mode`}><div className="mode-world-grid" aria-hidden="true" /><div className="mode-orbit mode-orbit-a" aria-hidden="true" /><div className="mode-orbit mode-orbit-b" aria-hidden="true" /><div className="mode-world-token" aria-hidden="true">{activeMode.motif}</div><div className="mode-world-coordinate">GAME SYSTEMS / CONCEPT 0{fictionalModes.findIndex((mode) => mode.id === selectedMode) + 1}</div><div className="mode-world-copy"><span>{activeMode.title} / WORLD TYPE</span><p>{activeMode.detail}</p></div><div className="mode-world-corner" aria-hidden="true">✳</div></div></div>
      </section>

      <section id="process" className="process-section content-section">
        <div className="section-kicker"><span>04</span><span className="kicker-rule" /> THE NIGHT, STEP BY STEP</div><div className="process-heading"><h2>From what if<br />to <span>what’s next.</span></h2><p>An imaginative sprint from first thought to game-night pitch.</p></div>
        <div className="timeline">{eventSteps.map((step, index) => <motion.div key={step} className="timeline-item" initial={reduceMotion ? false : { opacity: 0, x: -14 }} whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.55 }} transition={{ duration: 0.42, delay: index * 0.045 }}><span className="timeline-number">{String(index + 1).padStart(2, "0")}</span><span className="timeline-node" aria-hidden="true" /><span className="timeline-label">{step}</span>{index === 2 && <span className="timeline-tool">GEMINI CHAT</span>}{index === 3 && <span className="timeline-tool">GOOGLE DOCS</span>}{index === 4 && <span className="timeline-tool">NANO BANANA</span>}{index === 6 && <span className="timeline-tool">ARENA VOTE</span>}</motion.div>)}</div>
      </section>

      <section className="worlds-section content-section">
        <div className="section-kicker"><span>05</span><span className="kicker-rule" /> WORLDS TO IMAGINE</div>
        <div className="worlds-heading"><h2>Somewhere<br /><span>impossible.</span></h2><span className="inspiration-only"><Sparkles aria-hidden="true" /> CONCEPT INSPIRATION ONLY</span></div>
        <div className="world-gallery" aria-label="Fictional game-world inspiration"><div className="gallery-image-wrap"><img key={galleryItem.src} className="gallery-image" src={galleryItem.src} alt={galleryItem.alt} width={galleryIndex === 0 ? 1536 : 1024} height={galleryIndex === 0 ? 1024 : 768} loading="lazy" /><span className="gallery-number">CONCEPT INSPIRATION / 0{galleryIndex + 1}</span><div className="gallery-caption"><span>{galleryItem.world}</span><h3>{galleryItem.title}</h3></div></div><div className="gallery-controls"><p>Fictional worlds to get your imagination moving.<br />Your game should be entirely original.</p><div className="gallery-pagination"><span>0{galleryIndex + 1}</span><span className="gallery-progress"><span style={{ width: `${((galleryIndex + 1) / inspiration.length) * 100}%` }} /></span><span>0{inspiration.length}</span><Button variant="outline" size="icon" aria-label="Previous concept inspiration" onClick={() => setGallery(-1)}><ArrowLeft aria-hidden="true" /></Button><Button variant="outline" size="icon" aria-label="Next concept inspiration" onClick={() => setGallery(1)}><ArrowRight aria-hidden="true" /></Button></div></div></div>
      </section>

      <section className="details-section content-section">
        <div className="details-art" aria-hidden="true"><Globe2 /><span>TRANSMISSION<br />PENDING</span></div>
        <div className="details-content"><div className="section-kicker"><span>06</span><span className="kicker-rule" /> KEEP THIS ON YOUR RADAR</div><h2>One night.<br />Infinite <span>worlds.</span></h2><p className="details-intro">A little breathing room to imagine something extraordinary.</p>
          <dl className="event-facts">{[["MODE", eventConfig.mode], ["PLATFORM", eventConfig.platform], ["DATE", eventConfig.date], ["TIME", eventConfig.time], ["PARTICIPATION", eventConfig.participation], ["EXPECTED ATTENDANCE", eventConfig.expectedAttendance], ["DURATION", eventConfig.duration]].map(([label, value]) => <div className="event-fact" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><span className="details-tbc-note"><span className="online-pulse" /> DATE &amp; PLATFORM DETAILS WILL BE ANNOUNCED</span>
        </div>
      </section>

      <section id="rules" className="rules-section content-section">
        <div className="section-kicker"><span>07</span><span className="kicker-rule" /> OFFICIAL GAMEVERSE RULEBOOK</div><div className="rules-heading"><h2>Play by<br /><span>your imagination.</span></h2><p>Good games start with big ideas—and a few shared rules.</p></div>
        <div className="rules-layout"><div className="rules-emblem"><Layers3 aria-hidden="true" /><span>GAMEVERSE<br /><b>PROTOCOL 01</b></span><span className="emblem-orbit" aria-hidden="true" /></div><ol className="rules-list">{officialRules.map((rule, index) => <li key={rule}><span>{String(index + 1).padStart(2, "0")}</span><p>{rule}</p></li>)}</ol></div>
      </section>

      <section id="faq" className="faq-section content-section">
        <div className="faq-side"><div className="section-kicker"><span>08</span><span className="kicker-rule" /> COMMS CHECK</div><h2>Questions<br />from the <span>lobby.</span></h2><p>Everything you need to jump into the idea.</p><div className="faq-deco" aria-hidden="true"><Gamepad2 /><span>READY<br />PLAYER ONE</span></div></div>
        <div className="faq-list">{faqs.map((faq, index) => <details key={faq.question} className="faq-item" open={index === 0}><summary><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><span>{faq.question}</span><ChevronDown aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="final-cta-section">
        <img className="final-cta-art" src={gameverseHero} alt="A glowing portal opens into a universe of floating worlds" width={1536} height={1024} loading="lazy" /><div className="final-cta-shading" /><div className="final-cta-content"><span className="final-kicker"><span className="online-pulse" /> THE NEXT UNIVERSE IS YOURS</span><h2>YOUR UNIVERSE<br /><span>IS WAITING.</span></h2><p>50 minds. Infinite possibilities. One unforgettable game night.</p><Button asChild className="button-cinematic final-register"><a {...registrationLinkProps}>REGISTER NOW <ArrowUpRight aria-hidden="true" /></a></Button><span className="form-note"><LockKeyhole aria-hidden="true" /> Registration is handled securely through Google Forms.</span></div><span className="final-cta-coordinate" aria-hidden="true">DIMENSION 01 / IMAGINATION</span></section>

      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><span>G</span></span><span className="brand-wordmark">GEMINI <b>GAMEVERSE</b></span></a><div className="footer-edition">GAME ON NIGHT — IMAGINE THE IMPOSSIBLE<br /><span>Organized by the {eventConfig.organizer}</span></div><a className="team-gemini" href="https://www.instagram.com/explore/tags/teamgemini/" target="_blank" rel="noopener noreferrer">#TeamGemini <MoveUpRight aria-hidden="true" /></a><div className="footer-bottom"><span>CREATED TO IMAGINE THE IMPOSSIBLE.</span><span>This Gemini Ambassador event is not an official corporate sponsorship announcement.</span><a {...registrationLinkProps}>REGISTER VIA GOOGLE FORMS <ExternalLink aria-hidden="true" /></a></div></footer>
    </main>
  );
}