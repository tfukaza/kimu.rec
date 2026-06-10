# Kimu.rec

An Astro website for browsing random product recommendations by category.

## Commands

```sh
npm install
npm run dev
npm run build
```

## Structure

- `src/data/recommendations.ts` contains the category, item, and product data.
- `src/pages/index.astro` lists categories.
- `src/pages/category/[category].astro` lists items in a category.
- `src/pages/category/[category]/[item].astro` shows the top recommendation for an item.
