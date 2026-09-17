import { createServer } from "node:http";
import { readFile } from "node:fs/promises";

const files = {
  "/": ["index.html", "text/html; charset=utf-8"],
  "/index.html": ["index.html", "text/html; charset=utf-8"],
  "/styles.css": ["styles.css", "text/css; charset=utf-8"],
  "/app.js": ["app.js", "text/javascript; charset=utf-8"],
  "/site-icon.png": ["site-icon.png", "image/png"],
  "/favicon-32.png": ["favicon-32.png", "image/png"],
  "/apple-touch-icon.png": ["apple-touch-icon.png", "image/png"],
  "/favicon.ico": ["favicon-32.png", "image/png"],
};
createServer(async (request, response) => {
  const path = (request.url || "/").split("?")[0];
  const file = Object.hasOwn(files, path) ? files[path] : null;
  if (!file) { response.writeHead(404).end("Not found"); return; }
  try {
    const content = await readFile(new URL(`../src/${file[0]}`, import.meta.url));
    response.writeHead(200, { "Content-Type": file[1], "Cache-Control": "no-store" });
    response.end(content);
  } catch {
    response.writeHead(500).end("Unable to read site file");
  }
}).listen(5173, "127.0.0.1", () => console.log("Local: http://127.0.0.1:5173/"));
