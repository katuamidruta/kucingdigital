# Oktaviary Log

A personal log built with Astro. For writings, mixes, reviews, conversations, and experiments.

---

## Stack

- **Astro v6** — static site generator with Content Layer API
- **Pages CMS** — content management via [pagescms.org](https://pagescms.org), connected to GitHub
- **IBM Plex Mono** — body and UI font
- **Press Start 2P** — display font for headings
- **Dark mode** — class-based (`.dark` on `<html>`), persisted via `localStorage`
- **Cloudflare Pages** — deployment, auto-deploy on push to `main`

## Design

- Terminal aesthetic — monospace everything, pixel headings
- Two-color palette: black/white + `#5170ff` (blue) as accent
- Dual logos: `logo-light.png` / `logo-dark.png` swap based on theme

## Content Types

All entries live in `src/content/logs/` as Markdown files.

| Type | Description |
| :--- | :--- |
| `writing` | Essays and written pieces |
| `mix` | Music mixes, supports SoundCloud embed |
| `review` | Book, film, or album reviews |
| `conversation` | Reconstructed dialogues |
| `experiment` | Everything else |

### Frontmatter schema

```yaml
title: "Entry Title"
date: 2026-05-05
description: "Short description shown on listing pages."
type: writing         # writing | mix | review | conversation | experiment
draft: false          # true = hidden from all pages
slug: "entry-title"   # controls URL: /log/entry-title
```

Filename must match slug: `entry-title.md`

## Project Structure

```
/
├── .pages.yml               # Pages CMS config
├── public/
│   ├── logo-light.png
│   ├── logo-dark.png
│   └── images/              # media uploads via Pages CMS
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── DarkModeToggle.astro
│   ├── content/
│   │   └── logs/            # all .md log entries
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── LogLayout.astro
│   ├── pages/
│   │   ├── index.astro      # homepage
│   │   ├── about.astro
│   │   └── log/
│   │       ├── index.astro  # all entries list + ?type= filter
│   │       └── [slug].astro # single entry
│   └── content.config.ts
└── package.json
```

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build to `./dist/` |
| `npm run preview` | Preview production build |

## CMS

Editing is done via **[pagescms.org](https://pagescms.org)**:

1. Sign in with GitHub
2. Select repo `katuamidruta/kucingdigital`
3. Edit or create entries under **Logs**
4. Publish → commits directly to `main` → Cloudflare auto-deploys

Type filter available at `/log?type=mix`, `/log?type=writing`, etc.
