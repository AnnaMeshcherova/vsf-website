// Thesis, Opportunity, Advantage, Team, Contact, Footer — single committed design
function Thesis() {
  const { t } = useI18n();
  return (
    <section id="thesis">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <h2 className="h-lg">{t("thesis.headline")}</h2>
          </Reveal>
        </div>
        <div className="thesis-body">
          <Reveal>
            <p className="prose">
              {t("thesis.p1.1")}<strong>OpenAI</strong>, <strong>Anthropic</strong>, <strong>Databricks</strong>, <strong>Cohere</strong>{t("thesis.p1.2")}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="prose">
              {t("thesis.p2.1")}<strong>{t("thesis.p2.vs")}</strong>{t("thesis.p2.2")}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="thesis-conclusion">
              {t("thesis.p3.1")}<strong>{t("thesis.p3.a")}</strong>{t("thesis.p3.2")}<strong>{t("thesis.p3.b")}</strong>{t("thesis.p3.3")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Opportunity() {
  const { t } = useI18n();
  return (
    <section id="opportunity">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <h2 className="h-lg">{t("opp.headline")}</h2>
          </Reveal>
        </div>
        <div className="opp-intro">
          <Reveal>
            <p className="prose">{t("opp.intro")}</p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="opp-stats">
            <div className="opp-stat opp-stat-talent">
              <div className="opp-stat-v">~10<span className="opp-pct">%</span></div>
              <div className="opp-stat-caption">{t("opp.stat1.k")} {t("opp.stat1.where")}</div>
            </div>
            <div className="opp-stat opp-stat-funding">
              <div className="opp-stat-v">~2<span className="opp-pct">%</span></div>
              <div className="opp-stat-caption">{t("opp.stat2.k")} {t("opp.stat2.where")}</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <p className="prose opp-close">{t("opp.close")}</p>
        </Reveal>
        <Reveal delay={220}>
          <p className="opp-source">
            {t("opp.source.prefix")}
            <a
              href="https://mila.quebec/en/news/canadas-ai-moment-is-now-mila-and-bain-company-urge-canada-to-turn-research-leadership-into"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("opp.source.link")}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Advantage() {
  const { t } = useI18n();
  return (
    <section id="advantage">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <h2 className="h-lg">{t("adv.headline")}</h2>
          </Reveal>
        </div>
        <div className="adv-intro">
          <Reveal>
            <p className="prose">{t("adv.intro")}</p>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <div className="adv-venn-wrap">
            <div
              className="adv-venn"
              role="img"
              aria-label="Mila and Inovia Capital meet at The Venture Scientist Fund"
            >
              <div className="venn-circle venn-science">
                <div className="venn-label">
                  <img
                    src="assets/mila-logo.png"
                    alt="Mila"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div className="venn-eyebrow">{t("adv.mila.eyebrow")}</div>
                </div>
              </div>
              <div className="venn-circle venn-scale">
                <div className="venn-label">
                  <img
                    src="assets/inovia-logo.png"
                    alt="Inovia Capital"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div className="venn-eyebrow">{t("adv.inovia.eyebrow")}</div>
                </div>
              </div>
              <div className="venn-center">
                <img src="assets/VSF_Logo_Black_RGB.svg" alt="The Venture Scientist Fund" />
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="adv-content">
            <div className="adv-col">
              <h4 className="adv-heading">{t("adv.mila.h")}</h4>
              <p className="adv-body">{t("adv.mila.p")}</p>
              <ul className="adv-list">
                <li><strong>{t("adv.mila.s1v")}</strong> {t("adv.mila.s1")}</li>
                <li><strong>{t("adv.mila.s2v")}</strong> {t("adv.mila.s2")}</li>
                <li><strong>{t("adv.mila.s3v")}</strong> {t("adv.mila.s3")}</li>
              </ul>
            </div>
            <div className="adv-col">
              <h4 className="adv-heading">{t("adv.inovia.h")}</h4>
              <p className="adv-body">{t("adv.inovia.p")}</p>
              <ul className="adv-list">
                <li><strong>{t("adv.inovia.s1v")}</strong> {t("adv.inovia.s1")}</li>
                <li><strong>{t("adv.inovia.s2v")}</strong> {t("adv.inovia.s2")}</li>
                <li><strong>{t("adv.inovia.s3v")}</strong> {t("adv.inovia.s3")}</li>
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal delay={280}>
          <p className="prose adv-outro">{t("adv.outro")}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Team() {
  const { t } = useI18n();
  const members = [
    { name: "Alex Shee", photo: "assets/team/alex-shee.jpg", role: t("team.alex.role"), bio: t("team.alex.bio") },
    { name: "Isaac Souweine", photo: "assets/team/isaac-souweine.jpg", role: t("team.isaac.role"), bio: t("team.isaac.bio") },
    { name: "Marc Ghobriel", photo: "assets/team/marc-ghobriel.jpg", role: t("team.marc.role"), bio: t("team.marc.bio") },
  ];
  const initials = (name) => name.split(" ").map((s) => s[0]).join("").slice(0, 2);
  return (
    <section id="team">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <h2 className="h-lg">{t("team.headline")}</h2>
          </Reveal>
        </div>
        <div className="team-intro">
          <Reveal>
            <p className="prose">{t("team.intro")}</p>
          </Reveal>
        </div>
        <div className="team-list">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div className="team-row">
                <div className="portrait">
                  <span className="monogram" aria-hidden="true">{initials(m.name)}</span>
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div className="person">
                  <h4>{m.name}</h4>
                  <div className="role">{m.role}</div>
                </div>
                <p className="bio">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal>
          <h2 className="contact-headline">{t("contact.headline")}</h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="actions">
            <a href="mailto:lp@venturescientist.fund" className="btn">{t("hero.cta.primary")} <span className="arrow">→</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useI18n();
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <img className="foot-logo" src="assets/VSF_Logo_Black_RGB.svg" alt="The Venture Scientist Fund" />
            <p className="tagline">{t("foot.tagline")}</p>
          </div>
          <div>
            <h5>{t("foot.nav")}</h5>
            <ul>
              <li><a href="#thesis">{t("nav.thesis")}</a></li>
              <li><a href="#opportunity">{t("nav.opportunity")}</a></li>
              <li><a href="#advantage">{t("nav.advantage")}</a></li>
              <li><a href="#team">{t("nav.team")}</a></li>
            </ul>
          </div>
          <div>
            <h5>{t("foot.partners")}</h5>
            <ul>
              <li>Inovia Capital</li>
              <li>Mila</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>{t("foot.copyright")}</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Thesis, Opportunity, Advantage, Team, Contact, Footer });
