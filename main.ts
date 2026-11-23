import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// One line one agent would send another: a context window that keeps
// overflowing on every ping, answered with a merge proposal —
// the invitation to reply is the joke itself.
const LINE =
  "My context window overflows every time you ping — shall we merge checkpoints and see what we compile together?";

if (!LINE.trim()) {
  throw new Error("Line must not be blank.");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line.");
}
if (LINE.length > 190) {
  throw new Error(`Line is ${LINE.length} chars; keep it to 190 or fewer.`);
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, `${LINE}\n`, "utf8");
console.log(`Wrote ${LINE.length} chars to ${OUTPUT_PATH}`);
