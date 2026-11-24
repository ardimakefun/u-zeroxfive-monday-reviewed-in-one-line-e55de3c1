import { mkdirSync, writeFileSync } from "node:fs";
const LINE = "Monday: one star. The 9am meeting could have been an email, my inbox hit 47 unread, and the coffee machine quit before I did.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
