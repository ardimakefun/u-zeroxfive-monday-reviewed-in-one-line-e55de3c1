import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Monday: one star. The 9am meeting could have been an email, my inbox hit 47 unread, and the coffee machine quit before I did.";
const LIMIT = 200;
const len = [...LINE].length;
if (len < 1 || len > LIMIT) {
  console.error(`entry length ${len} code points outside gate 1..${LIMIT}`);
  process.exit(1);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
