export type Product = {
  name: string;
  jaName: string;
  brand: string;
  sourceLabel: string;
  url: string;
  image: string;
  icon: string;
  why: string;
  highlights: string[];
};

export type Item = {
  slug: string;
  name: string;
  jaName: string;
  description: string;
  icon: string;
  considerations: string[];
  topPick: Product;
  alternatives: Product[];
};

export type Category = {
  slug: string;
  name: string;
  jaName: string;
  description: string;
  icon: string;
  items: Item[];
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
    items: [
      {
        slug: "water-filter",
        name: "Water Filter",
        jaName: "浄水器",
        description: "An under-sink reverse osmosis filter with hot water support.",
        icon: "water_drop",
        considerations: [
          "Reverse osmosis filters use pressure to push water through a fine membrane, which can noticeably improve taste compared with simple inline filters.",
          "If you make tea or frequently need hot water for cooking, a combined filtered-water and hot-water system avoids chaining multiple devices together.",
        ],
        topPick: {
          name: "Instant Hot Reverse Osmosis System K6",
          jaName: "インスタント温水ROシステム K6",
          brand: "Waterdrop",
          sourceLabel: "Waterdrop product page",
          url: "https://www.waterdropfilter.com/collections/instant-hot-ro-system/products/reverse-osmosis-instant-hot-water-dispenser-system-wd-k6-w?ref=headermenu",
          image:
            "https://www.waterdropfilter.com/cdn/shop/files/ui-product-K6-new.png?v=1736817248",
          icon: "water_drop",
          why: "This is the recommended starter pick because it combines reverse osmosis filtration with adjustable hot water dispensing in one under-sink system.",
          highlights: [
            "Reverse osmosis filtration",
            "Built-in hot water dispensing",
            "Temperature-adjustable faucet",
          ],
        },
        alternatives: [],
      },
      {
        slug: "dish-rack",
        name: "Dish Rack",
        jaName: "食器ラック",
        description: "A countertop rack for kitchens that hand-wash enough dishes to need one.",
        icon: "dishwasher_gen",
        considerations: [
          "A dish rack is most useful if you regularly hand-wash items instead of using the dishwasher as temporary storage.",
          "Countertop, in-sink, and over-sink racks all trade off space, drainage, and capacity.",
          "For racks with trays and spouts, easy disassembly matters because they need regular cleaning.",
        ],
        topPick: {
          name: "Steel Frame Dishrack",
          jaName: "スチールフレーム食器ラック",
          brand: "simplehuman",
          sourceLabel: "simplehuman product page",
          url: "https://www.simplehuman.com/products/steel-frame-dishrack-standard",
          image:
            "https://www.simplehuman.com/cdn/shop/files/KT1181_35be29b6-e3b2-42f9-bb7f-ff0d8c90b73c_1200x1200.png?v=1732246972",
          icon: "dishwasher_gen",
          why: "The built-in drainage spout routes water back into the sink, and the rack comes apart easily enough for maintenance.",
          highlights: ["Swiveling drainage spout", "Stainless steel frame", "Removable parts"],
        },
        alternatives: [],
      },
      {
        slug: "sink-caddy",
        name: "Sink Caddy",
        jaName: "シンクキャディ",
        description: "A compact in-sink organizer for sponges and sink tools.",
        icon: "countertops",
        considerations: [
          "In-sink caddies are preferable because they avoid dripping water around the counter.",
          "The mount should feel sturdy while still being easy to remove for cleaning.",
          "A compact footprint matters because sink space is limited.",
        ],
        topPick: {
          name: "Slim Sink Caddy",
          jaName: "スリムシンクキャディ",
          brand: "simplehuman",
          sourceLabel: "simplehuman product page",
          url: "https://www.simplehuman.com/products/sink-caddy-slim?variant=30245376229507",
          image:
            "https://www.simplehuman.com/cdn/shop/files/KT1134_1_1200x1200.jpg?v=1711150265",
          icon: "countertops",
          why: "It is compact, mounts with both suction cups and a ledge hanger, and keeps wet sponges inside the sink.",
          highlights: ["Compact in-sink design", "Suction cups plus ledge hanger", "Stainless steel finish"],
        },
        alternatives: [],
      },
    ],
  },
  {
    slug: "living-room",
    name: "Living Room",
    jaName: "リビングルーム",
    description: "Home cleaning and comfort products for shared spaces.",
    icon: "chair",
    items: [
      {
        slug: "robot-vacuum",
        name: "Robot Vacuum",
        jaName: "ロボット掃除機",
        description: "A high-end robot vacuum and mop for automated floor care.",
        icon: "cleaning_services",
        considerations: [
          "Modern robot vacuums vary widely in navigation, from camera-based systems to more detailed LiDAR mapping.",
          "Obstacle avoidance, brush design, edge cleaning, and app controls can matter as much as raw suction.",
          "Mopping systems range from simple cloth pads to roller pads with dirty-water collection.",
          "Docks may add auto-emptying, auto-refill, mop washing, and heated drying, but those features also affect size and maintenance.",
          "Smaller robots fit more places, but they often compromise on premium features.",
        ],
        topPick: {
          name: "Flow Series",
          jaName: "フローシリーズ",
          brand: "Narwal",
          sourceLabel: "Vacuum Wars article",
          url: "https://vacuumwars.com/narwal-shows-off-latest-robot-vacuum-lineup-at-ces-2025/",
          image: "https://vacuumwars.com/wp-content/uploads/2025/01/Narwal-Robot-Vacuums.png",
          icon: "cleaning_services",
          why: "This is highlighted because the Flow Series was called out as one of the early robot vacuums with roller mopping and dirty-water collection.",
          highlights: [
            "Roller mop system",
            "Dirty-water collection",
            "Flagship cleaning features",
          ],
        },
        alternatives: [
          {
            name: "Saros 10R",
            jaName: "サロス 10R",
            brand: "Roborock",
            sourceLabel: "Roborock product page",
            url: "https://us.roborock.com/pages/roborock-saros-10r",
            image:
              "https://cdn.shopify.com/s/files/1/0082/3666/2902/files/066316c5-be40-4ae9-80d3-a035d914debd.jpg?height=628&pad_color=ffffff&v=1725023592&width=1200",
            icon: "cleaning_services",
            why: "A slim flagship alternative with advanced navigation and a multifunction dock.",
            highlights: ["Slim body", "Advanced obstacle recognition", "Multifunction dock"],
          },
          {
            name: "X50 Ultra",
            jaName: "X50 ウルトラ",
            brand: "Dreame",
            sourceLabel: "Dreame product page",
            url: "https://www.dreametech.com/products/x50-ultra-robot-vacuum-preorder",
            image:
              "https://cdn.shopify.com/s/files/1/0553/1320/3405/files/1_99ba9a64-6e8f-4eef-9ae0-d2e41941854d.jpg?v=1736170941",
            icon: "cleaning_services",
            why: "Another premium alternative from the source recommendation table.",
            highlights: ["Premium robot vacuum", "Mop support", "Dock automation"],
          },
        ],
      },
    ],
  },
  {
    slug: "bed",
    name: "Bed",
    jaName: "ベッド",
    description: "A source category reserved for future sleep recommendations.",
    icon: "bed",
    items: [],
  },
  {
    slug: "furniture",
    name: "Furniture",
    jaName: "家具",
    description: "A source category reserved for future furniture recommendations.",
    icon: "chair",
    items: [],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getItem(categorySlug: string, itemSlug: string) {
  return getCategory(categorySlug)?.items.find((item) => item.slug === itemSlug);
}
