# Oktaviary Log

A personal log built with Astro. For writings, mixes, reviews, conversations, and experiments.

---

## Stack

- **Astro v6** — static site generator with Content Layer API
- **Decap CMS** — local/git-based content management at `/admin`
- **IBM Plex Mono** — body and UI font
- **Press Start 2P** — display font for headings
- **Dark mode** — class-based (`.dark` on `<html>`), persisted via `localStorage`

## Design

- Terminal aesthetic — monospace everything, pixel headings
- Two-color palette: black/white + `#5170ff` (blue) as accent
- Dual logos: `logo-light.png` / `logo-dark.png` swap based on theme
- Inspired by the [Zaggonaut](https://github.com/RATIU5/zaggonaut) Astro theme

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
logNumber: 1          # optional, renders as Log 001
draft: false          # true = hidden from all pages
```

## Project Structure

```
/
├── public/
│   ├── logo-light.png       # logo for light mode
│   ├── logo-dark.png        # logo for dark mode
│   └── admin/
│       ├── index.html       # Decap CMS
│       └── config.yml
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
│   │       ├── index.astro  # all entries list
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

## CMS (Decap)

Run both commands simultaneously to use the local CMS:

```sh
npm run dev
npx decap-server
```

Then open `localhost:4321/admin`.
