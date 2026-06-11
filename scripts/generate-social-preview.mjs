import path from "node:path";
import { readFile } from "node:fs/promises";
import sharp from "sharp";

const outputPath = "public/social-preview.png";
const fontPath = path.resolve("public/fonts/bitcount/bitcount-grid-single-900.ttf");
const fontBase64 = await readFile(fontPath, "base64");

const frame = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <style>
    @font-face {
      font-family: "BitcountPreview";
      src: url("data:font/ttf;base64,${fontBase64}") format("truetype");
      font-weight: 900;
    }
  </style>
  <defs>
    <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
      <text x="1" y="12" fill="#d8d8d8" font-family="monospace" font-size="10" font-weight="300">+</text>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect width="1200" height="630" fill="url(#grid)" opacity="0.55"/>
  <rect x="72" y="72" width="1056" height="486" fill="#ffffff" stroke="#111111" stroke-width="4"/>
  <line x1="72" y1="142" x2="1128" y2="142" stroke="#d8d8d8" stroke-width="2"/>
  <circle cx="72" cy="142" r="6" fill="#ffffff" stroke="#d8d8d8" stroke-width="4"/>
  <circle cx="1128" cy="142" r="6" fill="#ffffff" stroke="#d8d8d8" stroke-width="4"/>
  <rect x="96" y="96" width="164" height="50" fill="#d6fb61" stroke="#111111" stroke-width="3"/>
  <text x="116" y="130" fill="#111111" font-family="Arial, sans-serif" font-size="24" font-weight="900">Kimu.rec</text>
  <text x="116" y="238" fill="#111111" font-family="BitcountPreview" font-size="72" font-weight="900">
    <tspan x="116" dy="0">Unapolo-</tspan>
    <tspan x="116" dy="86">getically Opinionated</tspan>
    <tspan x="116" dy="86">Product Recs</tspan>
  </text>
</svg>`;

await sharp(Buffer.from(frame)).png().toFile(outputPath);

console.log(`Generated ${outputPath}`);
