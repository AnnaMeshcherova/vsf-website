# VSF Website

One-page bilingual (EN/FR) marketing site for The Venture Scientist Fund. React 18 via Babel-in-browser, no build step. Open `index.html` directly in a browser.

## Design System
Always read [DESIGN.md](./DESIGN.md) before making any visual or UI decisions. All font choices, colors, spacing, motion, and aesthetic direction are defined there. Do not deviate without explicit user approval. In QA mode, flag any code that doesn't match DESIGN.md.

## Architecture
- `index.html` — entry, loads React UMD + Babel standalone + component files.
- `styles.css` — single stylesheet. Tokens in `:root`. BEM-ish class names.
- `components/I18n.jsx` — EN/FR strings, `useI18n()` hook, `LangToggle` component.
- `components/Primitives.jsx` — `Reveal` (scroll-reveal fade).
- `components/Hero.jsx` — `Nav` + `Hero`.
- `components/Sections.jsx` — `Thesis`, `Opportunity`, `Advantage`, `Team`, `Contact`, `Footer`.
- `assets/` — logos (black + white SVG/PNG) and `hero-bg.jpg`.

## Strings
All user-visible text lives in `components/I18n.jsx` under `STRINGS.en` and `STRINGS.fr`. Never hard-code copy in JSX.

## Don't
- Don't add a build step without discussion — the Babel-in-browser setup is intentional for speed of iteration.
- Don't re-introduce the Tweaks panel or multiple hero/team variants. One committed design.
- Don't add fonts beyond Source Serif 4 and IBM Plex Sans. (Two families, zero mono.)
