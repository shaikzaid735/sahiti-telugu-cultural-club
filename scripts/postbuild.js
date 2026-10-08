import fs from "node:fs";
import path from "node:path";

const publicDir = path.resolve(".output/public");
const assetsDir = path.join(publicDir, "assets");
const basePath = "/sahiti-telugu-cultural-club/";

if (!fs.existsSync(assetsDir)) {
  console.error("Assets directory not found:", assetsDir);
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
const indexJsFile = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
const routesJsFile = files.find((f) => f.startsWith("routes-") && f.endsWith(".js"));

const cssPath = cssFile ? `${basePath}assets/${cssFile}` : "";
const indexJsPath = indexJsFile ? `${basePath}assets/${indexJsFile}` : "";
const routesJsPath = routesJsFile ? `${basePath}assets/${routesJsFile}` : "";

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sahiti (సాహితి) — A Living Expression of Telugu</title>
    <meta name="description" content="Sahiti is a Telugu cultural club celebrating language, literature, history, drama, music and dance." />
    <meta property="og:title" content="Sahiti (సాహితి) — A Living Expression of Telugu" />
    <meta property="og:description" content="Discover Telugu language, literature, history and performing arts with Sahiti." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@400;500&family=Noto+Sans+Telugu:wght@400;500&family=Noto+Serif+Telugu:wght@400;500;600&display=swap" />
    ${cssPath ? `<link rel="stylesheet" href="${cssPath}" />` : ""}
    <link rel="icon" href="${basePath}favicon.ico" type="image/x-icon" />
  </head>
  <body>
    <div id="root"></div>
    ${routesJsPath ? `<script type="module" src="${routesJsPath}"></script>` : ""}
    ${indexJsPath ? `<script type="module" src="${indexJsPath}"></script>` : ""}
  </body>
</html>
`;

fs.writeFileSync(path.join(publicDir, "index.html"), htmlContent, "utf-8");
fs.writeFileSync(path.join(publicDir, "404.html"), htmlContent, "utf-8");
fs.writeFileSync(path.join(publicDir, ".nojekyll"), "", "utf-8");

console.log("Postbuild static index.html, 404.html, and .nojekyll generated successfully for GitHub Pages.");
