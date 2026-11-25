// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes one 100-word monologue to /output/entry.txt.
//
// The speaker: a dark lord three centuries into his reign, addressing the
// hero who has finally reached his throne room. He is secretly exhausted,
// but the brief forbids him ever saying so — so the tiredness has to live
// in the delivery instead: the false start ("Sit—no, stand"), the stuttered
// repeat ("late—late!"), the small domestic complaint (a cushion that never
// fit), the chores he no longer bothers with (names crossed out, maps
// folded into boats), and the pause before the last line ("Only...").
// He is still a villain throughout: he signed the Treaty of Ashes in his
// own blood-ink, he has a spymaster and a general, and the final line is a
// sting — the step the hero is about to take has been polished, by him, for
// exactly this moment.
//
// The monologue is built in three acts so the performance arc is visible in
// the source: the greeting (a lord wrong-footed by his own hospitality),
// the ledger (three centuries of rule reduced to late tithes and ignored
// reports), and the invitation (the trap, sprung politely). Joined with
// single spaces the three acts are exactly 100 words, 553 characters —
// inside the gate's 1-600 characters, and near enough to 100 words that
// every word earns its place.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Act I — the greeting. He cannot even decide whether the hero should sit.
const GREETING = [
  "You ask why the torches burn blue.",
  "Sit—no, stand.",
  "Three hundred years I've kept this throne warm, and the cushion still doesn't fit.",
  "The old northern barons think I sleep.",
  "Let them.",
];

// Act II — the ledger. History and scheme, told as paperwork he is done with.
const LEDGER = [
  "I signed the Treaty of Ashes with a quill that bled my ink, and the harvest tithe arrives late—late!—every autumn, as if the wheat conspires.",
  "My spymaster brings me names; I cross them out.",
  "My general brings me maps; I fold them into boats.",
  "Tonight the moat frogs sing, and for once I listen.",
];

// Act III — the invitation. One breath, one turn, one sting in the last line.
const INVITATION = [
  "Closer, hero.",
  "The blade is yours.",
  "Only... mind the step.",
  "I polished it myself.",
];

const BEATS = [...GREETING, ...LEDGER, ...INVITATION];
const MONOLOGUE = BEATS.join(" ");

// Words the villain must never say: the tiredness is felt, never announced.
const ANNOUNCED_TIREDNESS = ["tired", "weary", "exhausted", "fatigued", "sleepy"];
const lowered = MONOLOGUE.toLowerCase();
for (const word of ANNOUNCED_TIREDNESS) {
  if (lowered.includes(word)) {
    throw new Error(`monologue must never announce tiredness, found: ${word}`);
  }
}

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-600 characters,
// not only whitespace. The brief asks for about 100 words; fail loudly here
// rather than shipping an entry the gate would refuse.
const chars = [...MONOLOGUE].length;
if (chars < 1 || chars > 600) {
  throw new Error(`entry is ${chars} characters, must be 1-600`);
}
if (MONOLOGUE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
const words = MONOLOGUE.split(/\s+/).filter(Boolean).length;
if (words < 95 || words > 105) {
  throw new Error(`entry is ${words} words, must stay near 100`);
}

// Deterministic self-check: the three acts must hold 5 + 4 + 4 beats, and
// the joined text must be exactly the beats in order, single-spaced.
if (BEATS.length !== 13 || GREETING.length !== 5 || LEDGER.length !== 4 || INVITATION.length !== 4) {
  throw new Error(`expected 13 beats (5/4/4), got ${BEATS.length}`);
}
if (MONOLOGUE !== BEATS.join(" ")) {
  throw new Error("monologue is not the beats joined with single spaces");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");

// Read back and confirm the file on disk is byte-identical to the text.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== MONOLOGUE) {
  throw new Error("read-back mismatch: /output/entry.txt differs from monologue");
}
console.log(`wrote /output/entry.txt: ${words} words, ${chars} characters, ${BEATS.length} beats`);
