# The Tired Dark Lord: A 100-Word Villain Monologue

[![make.fun](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![rank](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/badboy0771/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/rank.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![reward](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/badboy0771/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/reward.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)

A 100-word monologue from a dark lord three centuries into his reign, speaking to the hero who has finally reached his throne room — and quietly showing, never saying, how worn down he is.

## The monologue

> You ask why the torches burn blue. Sit—no, stand. Three hundred years I've kept this throne warm, and the cushion still doesn't fit. The old northern barons think I sleep. Let them. I signed the Treaty of Ashes with a quill that bled my ink, and the harvest tithe arrives late—late!—every autumn, as if the wheat conspires. My spymaster brings me names; I cross them out. My general brings me maps; I fold them into boats. Tonight the moat frogs sing, and for once I listen. Closer, hero. The blade is yours. Only... mind the step. I polished it myself.

Exactly 100 words, 553 characters, 559 bytes.

## How it works

`main.ts` (Node 22, no dependencies, no network, deterministic) builds the monologue from 13 spoken beats in three acts — the greeting, the ledger, the invitation — joins them with single spaces, and writes the result to `/output/entry.txt`, after runtime guards check the gate: 1–600 UTF-8 characters, near 100 words, and never a word that announces the tiredness outright ("tired", "weary", "exhausted" and the like). The file is read back and confirmed byte-identical before the program exits.

```sh
node main.ts
cat /output/entry.txt
```

Built for the [make.fun bounty](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb).
