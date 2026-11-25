import * as fs from "node:fs";
import * as path from "node:path";

// One short family scene: a small Sunday-dinner moment, warm and wry,
// with a single telling detail. Written as one line, no trailing newline.
const SCENE: string =
  "Grandma still sets a place for Grandpa at Sunday dinner \u2014 then eats his dessert herself. 'He'd want me to have it,' she says, winking. We all nod. He would.";

function main(): void {
  const outDir: string = process.env.OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });
  const outPath: string = path.join(outDir, "entry.txt");
  fs.writeFileSync(outPath, SCENE, "utf8");
}

main();
