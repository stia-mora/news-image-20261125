// news-image-20261125 entrypoint.
// Copies the pre-drawn front page (entry.png, in this repository) to the
// output directory the grader provides, as entry.png.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || join(here, "out");
const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts: ${source}`);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
