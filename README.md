# Jaswanth Meesala · Portfolio

A single-page portfolio built with the Next.js App Router, React, and Tailwind CSS. The page is generated at build time. The navigation menu and active section indicator run in the browser.

## Project layout

- `frontend/app/` contains the portfolio and its styles.
- `frontend/public/` contains the public résumé download.
- The site has no backend services or environment variables.

## Develop locally

Use Node.js 24 and pnpm.

```sh
cd frontend
pnpm install --frozen-lockfile
pnpm dev
```

Open [localhost:3000](http://localhost:3000). To preview the production build, run `pnpm build` and then `pnpm start`.

## Deploy to Vercel

1. Import the GitHub repository in Vercel.
2. Set **Root Directory** to `frontend`.
3. Use the **Next.js** framework preset and deploy with the default build settings.

The résumé download uses the PDF in `frontend/public/`. Keep the original résumé outside that directory.
