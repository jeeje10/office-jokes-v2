// Make the AI Judge Laugh: Office Jokes — make.fun entry (v2).
// Writes one joke about office life (under 200 characters) to
// /output/entry.txt. The joke rings true about every office: the
// trust-fall team building where everyone caught the Wi-Fi password
// and nobody caught Dave.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Our team building exercise was trust falls. Everyone caught the Wi-Fi password, nobody caught Dave.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 199;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
