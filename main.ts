// SPDX-License-Identifier: MIT
// One Line, One Laugh — writes one funny line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge started a podcast about my midnight snacks. Episode one: '2 a.m. Again.'";

// The gate allows 1 to 140 characters; fail loudly instead of shipping an invalid line.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
