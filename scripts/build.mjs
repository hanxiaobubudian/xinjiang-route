import { copyFileSync, mkdirSync } from "node:fs";

const output = new URL("../dist/", import.meta.url);
mkdirSync(output, { recursive: true });
for (const file of ["index.html", "styles.css", "app.js", "site-icon.png", "favicon-32.png", "apple-touch-icon.png"]) {
  copyFileSync(new URL(`../src/${file}`, import.meta.url), new URL(file, output));
}
console.log("Built site and icon assets in dist/");
