# Mahika

Limited-edition ladies suit ecommerce site — a 60-day "edit" of 40 hand-crafted suit sets across five ongoing collection lines (Phulkari Rang, Kashmiri Kali, Bandhani Bloom, Resham Naaz, Kantha Roz), each design capped at 10 sets.

Third brand vertical in the same drop-model family as [Aaranya](https://github.com/digitalsmartdesk-cmyk/aaranya) (sarees) and [Vasavi](https://github.com/digitalsmartdesk-cmyk/lehenga) (lehengas) — same architecture, rebuilt as its own standalone app with brand differences (name, palette, copy, vocabulary, product schema) isolated in `src/brand.js` rather than forked page logic. Front-end-only mockup: cart/checkout state lives client-side (React context + localStorage), no real payment processing or backend.

## What's different from Aaranya / Vasavi

- Product unit is a "set" (kameez + bottom + dupatta), same set-based shape as Vasavi's lehenga — see the `specs` array on each product in `src/data/products.js`.
- Checkout has a "Measurements" field (bust/waist/hip/kameez length) for made-to-measure stitching, in place of Vasavi's blouse-size field.
- Forest-green accent / sage-cream palette, defined as CSS custom properties in `src/index.css`.
- Order numbers use a `MAH-` prefix; base pricing and copy come from `src/brand.js`.

## Stack

- React 19 + Vite
- React Router (HashRouter, for static GitHub Pages hosting) for the 7 screens
- Plain CSS custom properties for design tokens (oklch palette, Cormorant Garamond + Manrope via Google Fonts)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- Product imagery under `public/images/` is placeholder colorway/atelier artwork carried over from the design handoff bundle, not real photography — swap in real shots before shipping to production.
- The countdown on Home/Collection/Product is live, computed against the edit's real end date (`EDIT_END` in `src/data/products.js`).
- GitHub Pages: `.github/workflows/deploy-pages.yml` builds and deploys on push to `main`. The repo's Settings → Pages → Source must be set to "GitHub Actions" for this to take effect — a brand-new repo has Pages disabled entirely until that's set once by hand.
