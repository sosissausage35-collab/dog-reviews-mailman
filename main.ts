// The Dog Reviews the Mailman — make.fun bounty entry
// One line, under 200 characters: a dog's review of the mailman.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const LINE =
  "One star. Every morning he sneaks up, shoves bills through MY door, then sprints off like he stole something — so I bark first, guard the gate, and let my tail do the talking.";

// --- validation gate ---
const MAX_CHARS = 200;

function validateLine(line: string): void {
  if (!line || line.trim().length === 0) {
    throw new Error("LINE must not be empty.");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("LINE must be a single line.");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `LINE is ${line.length} characters, over the ${MAX_CHARS}-character limit.`,
    );
  }
}

validateLine(LINE);

console.log(LINE);
console.log(`Characters: ${LINE.length} / ${MAX_CHARS}`);

// Write the entry line to /output/entry.txt (make.fun entry output).
const outDir = process.env.OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${outPath}`);
