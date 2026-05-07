# Shrisat Astro Vastu — Astrology & Vastu Science

## Overview

A single-page React + Vite website for an astrology and Vastu consulting business. Flat project structure — everything lives at the root, so a single `npm install` and `npm run dev` is all that's needed.

## Stack

- **Framework**: React 19 + Vite 6 + TypeScript
- **Styling**: Tailwind CSS 4 + Radix UI primitives + tw-animate-css
- **Routing**: wouter
- **Forms**: react-hook-form + zod
- **Animation**: framer-motion
- **State / data**: @tanstack/react-query

## Project Structure

```
.
├── index.html              # Vite HTML entry
├── vite.config.ts          # Vite config (port 5000 / 18709 via PORT env)
├── tsconfig.json
├── package.json
├── public/                 # Static assets (favicon, hero images)
├── src/                    # App source
│   ├── main.tsx            # React entry
│   ├── App.tsx             # Routes
│   ├── index.css           # Tailwind & global styles
│   ├── pages/              # Route pages (home, about, services, contact, …)
│   ├── components/         # Shared UI components
│   ├── hooks/
│   ├── lib/
│   └── assets/             # Imported image assets
└── attached_assets/        # External media & references
```

## Commands

- `npm install` — install dependencies
- `npm run dev` — start the dev server (Vite, port 5000 by default)
- `npm run build` — build for production into `dist/`
- `npm run preview` — preview the production build
- `npm run typecheck` — run TypeScript type checking

## Notes

- The Replit workflow runs `npm run dev` with `PORT=18709`, which is the port mapped to the public dev URL.
- No backend / database — the site is fully static.
