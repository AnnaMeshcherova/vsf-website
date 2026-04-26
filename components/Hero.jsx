// Nav + Hero — i18n-aware, single committed variant
const { useEffect, useState } = React;

function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo" aria-label="The Venture Scientist Fund">
          <img className="logo-light" src="assets/VSF_Logo_White_RGB.svg" alt="The Venture Scientist Fund" />
          <img className="logo-dark" src="assets/VSF_Logo_Black_RGB.svg" alt="The Venture Scientist Fund" />
        </a>
        <div className="nav-links">
          <a href="#thesis">{t("nav.thesis")}</a>
          <a href="#opportunity">{t("nav.opportunity")}</a>
          <a href="#advantage">{t("nav.advantage")}</a>
          <a href="#team">{t("nav.team")}</a>
        </div>
        <div className="nav-right">
          <LangToggle />
          <a href="#contact" className="btn">{t("nav.cta")} <span className="arrow">→</span></a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const { t } = useI18n();
  return (
    <section className="hero" id="top">
      <div className="hero-scrim" aria-hidden="true"></div>

      <div className="hero-body">
        <div className="wrap">
          <div className="hero-copy">
            <Reveal delay={80}>
              <h1 className="headline">{t("hero.headline")}</h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="sub">{t("hero.sub")}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero-partners">
                <span className="hero-partners-label">{t("cred.label")}</span>
                <div className="hero-partners-logos">
                  <img className="logo-mila" src="assets/mila-logo.png" alt="Mila" />
                  <span className="hero-partners-sep" aria-hidden="true" />
                  <img src="assets/inovia-logo.png" alt="Inovia Capital" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="actions">
                <a href="#contact" className="btn">{t("hero.cta.primary")} <span className="arrow">→</span></a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero });
