# The Venture Scientist Fund — Website

One-page bilingual (EN/FR) marketing site for **The Venture Scientist Fund** (VSF), a Canadian AI venture fund in partnership with Mila and Inovia Capital.

**Live:** https://vsf-website-zeta.vercel.app

## Stack

- React 18 via Babel-in-browser — no build step
- Two fonts: Source Serif 4 + IBM Plex Sans (Google Fonts)
- Static files, deployable as-is to any static host (Vercel, Netlify, Cloudflare Pages, S3)

## Local development

No install step required. Open over HTTP (the Babel loader fetches `.jsx` files, which browsers block over `file://`):

```bash
python3 -m http.server 8080
# then visit http://127.0.0.1:8080/
```

## Project structure

```
index.html              # entry: loads React UMD + Babel standalone + component files
styles.css              # single stylesheet. Tokens in :root. BEM-ish class names.
components/
  I18n.jsx              # EN/FR strings, useI18n() hook, LangToggle
  Primitives.jsx        # Reveal (scroll-reveal fade), TypewriterLine
  Hero.jsx              # Nav + Hero
  Sections.jsx          # Thesis, Opportunity, Advantage, Team, Contact, Footer
assets/                 # logos, hero background, team photos
DESIGN.md               # design system (colors, type, spacing, motion)
CLAUDE.md               # routing + don't-list for future AI edits
```

## Content

All user-visible strings live in `components/I18n.jsx` under `STRINGS.en` and `STRINGS.fr`. Never hard-code copy in JSX.

## Design

Read [`DESIGN.md`](./DESIGN.md) before making any visual or UI change. Fonts: Source Serif 4 + IBM Plex Sans (two families, zero mono). Palette: warm ivory + Prussian ink-blue accent.

## Deploy

Vercel auto-detects this as a static site. No build command needed.

```bash
vercel        # preview deploy
vercel --prod # production deploy
```
