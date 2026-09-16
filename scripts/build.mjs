import { copyFileSync, mkdirSync } from "node:fs";

const output = new URL("../dist/", import.meta.url);
mkdirSync(output, { recursive: true });
for (const file of ["index.html", "styles.css", "app.js"]) {
  copyFileSync(new URL(`../src/${file}`, import.meta.url), new URL(file, output));
}
console.log("Built dist/index.html, dist/styles.css, dist/app.js");
