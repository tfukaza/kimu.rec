export type Category = {
  slug: string;
  name: string;
  jaName: string;
  description: string;
  icon: string;
};

export const sourcePage = {
  title: "IRL Meta",
  url: "https://kimunyc.notion.site/IRL-Meta-17d713e115fa814ba0dbc14e0da70651",
};

export const categories: Category[] = [
  {
    slug: "kitchen",
    name: "Kitchen",
    jaName: "キッチン",
    description: "Sink-side upgrades and practical kitchen infrastructure.",
    icon: "kitchen",
  },
  {
    slug: "tech",
    name: "Tech",
    jaName: "IT機器",
    description: "Connected devices and automated tools for daily home routines.",
    icon: "memory",
  },
  {
    slug: "apparel",
    name: "Apparel",
    jaName: "アパレル",
    description: "Comfortable everyday clothing that still looks put together.",
    icon: "checkroom",
  },
  {
    slug: "living-room",
    name: "Living Room",
    jaName: "リビングルーム",
    description: "Home cleaning and comfort products for shared spaces.",
    icon: "chair",
  },
  {
    slug: "bed",
    name: "Bed",
    jaName: "ベッド",
    description: "A source category reserved for future sleep recommendations.",
    icon: "bed",
  },
  {
    slug: "furniture",
    name: "Furniture",
    jaName: "家具",
    description: "A source category reserved for future furniture recommendations.",
    icon: "chair",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
