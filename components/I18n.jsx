// i18n: strings + context + language toggle
const { createContext, useContext, useState, useEffect } = React;

const STRINGS = {
  en: {
    "nav.thesis": "Thesis",
    "nav.opportunity": "Opportunity",
    "nav.advantage": "Advantage",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "nav.cta": "Join Us",

    "hero.tag": "Fund I · Now raising",
    "hero.headline": "Backing Breakthroughs, Shaping Humanity",
    "hero.headline.future": "future",
    "hero.sub": "We back AI scientists at the moment of discovery, turning breakthroughs into category-defining companies.",
    "hero.cta.primary": "Join Us",
    "hero.cta.secondary": "Read the thesis",

    "cred.label": "In partnership with",

    "thesis.label": "01 — Thesis",
    "thesis.headline": "The rise of the Venture Scientist.",
    "thesis.p1.1": "The most important companies of the AI era, including ",
    "thesis.p1.2": ", share a common origin: researchers who turned breakthroughs in science into global companies.",
    "thesis.p2.1": "We call them ",
    "thesis.p2.vs": "Venture Scientists",
    "thesis.p2.2": ". They emerge at the frontier of research—where new capabilities are discovered and new companies are born.",
    "thesis.p3.1": "The next generation of AI companies will emerge from the same place: the intersection of ",
    "thesis.p3.a": "scientific discovery",
    "thesis.p3.2": " and ",
    "thesis.p3.b": "AI-native company building",
    "thesis.p3.3": ".",
    "thesis.typewriter.static": "From breakthrough AI research → ",

    "opp.label": "02 — Opportunity",
    "opp.headline": "Canada's AI advantage and its funding gap.",
    "opp.intro": "Canada is one of the world's leading hubs for AI research, with thousands of top-tier researchers and one of the highest concentrations of AI talent globally. But there is a structural imbalance.",
    "opp.stat1.k": "of global AI talent",
    "opp.stat1.where": "is in Canada",
    "opp.stat2.k": "of global AI venture capital",
    "opp.stat2.where": "flows here",
    "opp.gap.label": "The gap",
    "opp.gap.k": "funding vs. talent — one of the largest imbalances in venture today",
    "opp.close": "This gap represents one of the largest untapped venture opportunities in the world. We close that gap by backing companies at inception, and inside the research labs where they start.",

    "adv.label": "03 — Advantage",
    "adv.headline": "Where science meets scale.",
    "adv.intro": "The Venture Scientist Fund combines two forces that rarely sit in the same room: frontier AI research and proven venture-scale execution.",
    "adv.mila.eyebrow": "Mila — The Science Engine",
    "adv.mila.h": "Discovery at the source.",
    "adv.mila.p": "Direct access to a dense ecosystem of AI researchers, enabling early insight into emerging breakthroughs, proprietary deal flow, and technical validation at the source.",
    "adv.mila.s1": "AI researchers",
    "adv.mila.s1v": "1,500+",
    "adv.mila.s2": "Deal flow",
    "adv.mila.s2v": "Source-level",
    "adv.mila.s3": "Technical diligence",
    "adv.mila.s3v": "At inception",
    "adv.inovia.eyebrow": "Inovia Capital — The Scale Engine",
    "adv.inovia.h": "Execution at venture scale.",
    "adv.inovia.p": "A leading venture platform with a strong track record in early-stage investing — a pipeline from research discovery to generational companies.",
    "adv.inovia.s1": "Exits",
    "adv.inovia.s1v": "65",
    "adv.inovia.s2": "IPOs",
    "adv.inovia.s2v": "4",
    "adv.inovia.s3": "Returned to LPs",
    "adv.inovia.s3v": "$3.1B+",
    "adv.outro": "Together, they create a pipeline from research discovery to venture-scale companies.",

    "team.label": "04 — Team",
    "team.headline": "Built by investors and operators inside AI.",
    "team.intro": "A team embedded in both the research and venture ecosystems, working at the intersection of science and company building.",
    "team.alex.role": "General Partner",
    "team.alex.bio": "Early-stage deep-tech investor and former AI executive who scaled a company to $2B.",
    "team.isaac.role": "General Partner",
    "team.isaac.bio": "Early-stage investor and community builder with experience supporting companies from first check to scale.",
    "team.magaly.role": "Partner",
    "team.magaly.bio": "10-year Partner at Inovia Capital and former executive operator in high-growth tech companies.",
    "team.edge.label": "Technical Edge",
    "team.edge.body.1": "Supported by Inovia's broader platform, including CTO ",
    "team.edge.body.steve": "Steve Woods",
    "team.edge.body.2": " (former Head of Google Canada Engineering) and ",
    "team.edge.body.shyam": "Shyam Sheth",
    "team.edge.body.3": " (former GenAI Product Lead at Google), providing deep technical diligence and insight.",

    "contact.eyebrow": "Become a partner",
    "contact.headline": "Join us in building the future of AI",

    "foot.tagline": "We enable the translation of AI research breakthroughs into companies that drive long-term economic value.",
    "foot.nav": "Navigate",
    "foot.partners": "Partners",
    "foot.copyright": "© 2026 The Venture Scientist Fund",
  },
  fr: {
    "nav.thesis": "Thèse",
    "nav.opportunity": "Opportunité",
    "nav.advantage": "Avantage",
    "nav.team": "Équipe",
    "nav.contact": "Contact",
    "nav.cta": "Rejoignez-nous",

    "hero.tag": "Fonds I · Levée en cours",
    "hero.headline": "Soutenir les percées, façonner l'humanité",
    "hero.headline.future": "l'avenir",
    "hero.sub": "Nous soutenons les scientifiques de l'IA au moment de la découverte, transformant leurs percées en entreprises qui redéfinissent des catégories entières.",
    "hero.cta.primary": "Rejoignez-nous",
    "hero.cta.secondary": "Lire la thèse",

    "cred.label": "En partenariat avec",

    "thesis.label": "01 — Thèse",
    "thesis.headline": "L'émergence du Venture Scientist.",
    "thesis.p1.1": "Les entreprises les plus importantes de l'ère de l'IA — dont ",
    "thesis.p1.2": " — partagent une même origine : des chercheurs qui ont transformé des percées scientifiques en entreprises d'envergure mondiale.",
    "thesis.p2.1": "Nous les appelons les ",
    "thesis.p2.vs": "Venture Scientists",
    "thesis.p2.2": ". Ils émergent à la frontière de la recherche — où de nouvelles capacités sont découvertes et où naissent de nouvelles entreprises.",
    "thesis.p3.1": "La prochaine génération d'entreprises d'IA émergera du même lieu : l'intersection entre la ",
    "thesis.p3.a": "découverte scientifique",
    "thesis.p3.2": " et la ",
    "thesis.p3.b": "construction d'entreprises nativement IA",
    "thesis.p3.3": ".",
    "thesis.typewriter.static": "De la recherche de pointe en IA → ",

    "opp.label": "02 — Opportunité",
    "opp.headline": "L'avantage IA du Canada et son écart de financement.",
    "opp.intro": "Le Canada est l'un des principaux pôles mondiaux de la recherche en IA, avec des milliers de chercheurs de premier plan et l'une des plus fortes concentrations de talents en IA au monde. Mais il existe un déséquilibre structurel.",
    "opp.stat1.k": "des talents mondiaux en IA",
    "opp.stat1.where": "sont au Canada",
    "opp.stat2.k": "du capital-risque mondial en IA",
    "opp.stat2.where": "y est investi",
    "opp.gap.label": "L'écart",
    "opp.gap.k": "financement vs. talent — l'un des plus grands déséquilibres du capital-risque actuel",
    "opp.close": "Cet écart représente l'une des plus grandes opportunités inexploitées en capital-risque au monde. Nous le comblons en soutenant les entreprises dès leur création, directement à l'intérieur des laboratoires de recherche où elles prennent naissance.",

    "adv.label": "03 — Avantage",
    "adv.headline": "Où la science rencontre l'échelle.",
    "adv.intro": "The Venture Scientist Fund réunit deux forces qui se retrouvent rarement ensemble : la recherche de pointe en IA et une exécution éprouvée à l'échelle du capital-risque.",
    "adv.mila.eyebrow": "Mila — Le moteur scientifique",
    "adv.mila.h": "La découverte, à la source.",
    "adv.mila.p": "Accès direct à un écosystème dense de chercheurs en IA, offrant une visibilité précoce sur les percées émergentes, un flux de transactions propriétaire et une validation technique à la source.",
    "adv.mila.s1": "Chercheurs en IA",
    "adv.mila.s1v": "1 500+",
    "adv.mila.s2": "Flux de transactions",
    "adv.mila.s2v": "À la source",
    "adv.mila.s3": "Diligence technique",
    "adv.mila.s3v": "Dès la création",
    "adv.inovia.eyebrow": "Inovia Capital — Le moteur d'échelle",
    "adv.inovia.h": "Exécution à l'échelle du capital-risque.",
    "adv.inovia.p": "Une plateforme de capital-risque de premier plan avec un solide parcours en investissement d'amorçage — un pipeline qui va de la découverte scientifique aux entreprises marquantes.",
    "adv.inovia.s1": "Sorties",
    "adv.inovia.s1v": "65",
    "adv.inovia.s2": "IPO",
    "adv.inovia.s2v": "4",
    "adv.inovia.s3": "Retourné aux LPs",
    "adv.inovia.s3v": "3,1 G$+",
    "adv.outro": "Ensemble, ils créent un pipeline qui va de la découverte en recherche aux entreprises à l'échelle du capital-risque.",

    "team.label": "04 — Équipe",
    "team.headline": "Bâti par des investisseurs et opérateurs au cœur de l'IA.",
    "team.intro": "Une équipe ancrée à la fois dans les écosystèmes de recherche et de capital-risque, travaillant à l'intersection de la science et de la construction d'entreprises.",
    "team.alex.role": "Associé principal",
    "team.alex.bio": "Investisseur en technologies profondes en phase d'amorçage et ancien dirigeant en IA ayant fait croître une entreprise jusqu'à 2 G$.",
    "team.isaac.role": "Associé principal",
    "team.isaac.bio": "Investisseur en phase d'amorçage et bâtisseur de communauté, avec l'expérience d'accompagner des entreprises du premier chèque à l'échelle.",
    "team.magaly.role": "Associée",
    "team.magaly.bio": "Associée pendant 10 ans chez Inovia Capital et ancienne opératrice exécutive dans des entreprises technologiques à forte croissance.",
    "team.edge.label": "Expertise technique",
    "team.edge.body.1": "Soutenue par la plateforme élargie d'Inovia, notamment le CTO ",
    "team.edge.body.steve": "Steve Woods",
    "team.edge.body.2": " (ancien directeur de l'ingénierie chez Google Canada) et ",
    "team.edge.body.shyam": "Shyam Sheth",
    "team.edge.body.3": " (ancien responsable produit GenAI chez Google), offrant une diligence technique et des perspectives approfondies.",

    "contact.eyebrow": "Devenir partenaire",
    "contact.headline": "Joignez-vous à nous pour bâtir l'avenir de l'IA",

    "foot.tagline": "Nous permettons la transformation des percées de la recherche en IA en entreprises qui génèrent une valeur économique durable.",
    "foot.nav": "Naviguer",
    "foot.partners": "Partenaires",
    "foot.copyright": "© 2026 The Venture Scientist Fund",
  },
};

const STAGES = {
  en: ["Series A", "Series B", "Series C", "IPO"],
  fr: ["Série A", "Série B", "Série C", "IPO"],
};

const I18nContext = createContext({ lang: "en", t: (k) => k, setLang: () => {} });

function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem("vsf_lang") || "en"; } catch { return "en"; }
  });
  useEffect(() => {
    try { localStorage.setItem("vsf_lang", lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);
  const t = (k) => (STRINGS[lang] && STRINGS[lang][k]) || STRINGS.en[k] || k;
  return React.createElement(I18nContext.Provider, { value: { lang, setLang, t, stages: STAGES[lang] } }, children);
}

function useI18n() { return useContext(I18nContext); }

function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        className={`lang-opt ${lang === "en" ? "on" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >EN</button>
      <span className="lang-sep" aria-hidden>/</span>
      <button
        className={`lang-opt ${lang === "fr" ? "on" : ""}`}
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
      >FR</button>
      <span className="lang-pill" aria-hidden data-lang={lang} />
    </div>
  );
}

Object.assign(window, { I18nProvider, useI18n, LangToggle, STRINGS, STAGES });
