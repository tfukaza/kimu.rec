import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const productSchema = z.object({
  name: z.string(),
  jaName: z.string(),
  brand: z.string(),
  sourceLabel: z.string(),
  url: z.string().url(),
  image: z.string().url(),
  icon: z.string(),
  why: z.string(),
  highlights: z.array(z.string()).default([]),
});

const productBundleSchema = z.object({
  name: z.string(),
  jaName: z.string(),
  icon: z.string(),
  why: z.string(),
  products: z.array(productSchema).min(2),
});

const recommendations = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/recommendations",
  }),
  schema: z.object({
    slug: z.string(),
    category: z.string(),
    name: z.string(),
    jaName: z.string(),
    icon: z.string(),
    order: z.number().default(999),
    topPick: z.union([productSchema, productBundleSchema]),
    alternatives: z.array(productSchema).default([]),
  }),
});

export const collections = {
  recommendations,
};
