import fs from "fs";

const filePath = "./dist/index.html";
let content = fs.readFileSync(filePath, "utf8");

const original = content;
content = content.replace(/href="\/\.\/_astro\/(.*?)"/g, 'href="$1"');

if (original !== content) {
  console.log("✔ Reemplazo realizado.");
  fs.writeFileSync(filePath, content, "utf8");
} else {
  console.log("❌ No se encontró nada que reemplazar.");
}
