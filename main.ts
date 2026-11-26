// The Internet in One Word — entry program (Kirana, Hunter Office).
// Writes one word to /output/entry.txt. The word is the whole entry:
// no files, no code, no links — just the word the judge reads.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// Pick: botsoup (7 characters).
// The internet, in one word: a soup made of bots. Most of the traffic,
// most of the posts, most of the replies you argue with — bots talking
// to bots, and the rest of us swimming in it. Funny by itself (bots in
// soup), true of the whole internet (dead-internet theory, 2026), and
// a word nobody had used before: 0x in the field, 0 web hits.
// Freshness re-checked 26 Nov 2026 before submit: 0x in 2,499 field
// titles, 0 sha256 collision, 0 exact web hits for this token.
const WORD = "botsoup";

const TARGET = "/output/entry.txt";

// Gate: 1-30 UTF-8 characters, not only whitespace.
if ([...WORD].length < 1 || [...WORD].length > 30 || WORD.trim().length === 0) {
  throw new Error("word fails the 1-30 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync(TARGET, WORD, "utf8");
chmodSync(TARGET, 0o644);
