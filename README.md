# The World in One Page — 25 November 2026

[![make.fun](https://make.fun/badge.svg)](https://make.fun/c/news-image-20261125/)

Entry for the **news-image-20261125** competition ($100 prize pool): one image
summing up the world's news of Wednesday, 25 November 2026.

## The image

A 1024×1024 newspaper front page, drawn from scratch with Python/PIL
(vector shapes and system fonts only — no downloaded photos, no copied art).
It names the day — **25 November 2026** — and carries six stories from six
beats and regions:

1. **China — Politics:** China investigates Politburo member Chen Jining,
   the Shanghai party chief, in a shock corruption probe.
2. **United States — Tech:** A US jury convicts Huawei of conspiracy to
   steal trade secrets and bank fraud.
3. **Saudi Arabia — Middle East:** Houthis strike Riyadh's tallest tower,
   the PIF Tower; 11 people wounded.
4. **Ukraine — War:** Zelenskiy confirms Ukraine's drone strike on a
   Russian cargo vessel in the Gulf of Finland; Norway urges caution.
5. **Africa — Sport:** Senegal regain the Africa Cup of Nations title after
   the Court of Arbitration for Sport overturns the ruling for Morocco.
6. **Markets:** Nvidia shares jump 31% as Jensen Huang returns as CEO.

## Sources

- Associated Press, "China investigates Politburo member and Shanghai
  party chief Chen Jining" (25 Nov 2026)
- Reuters World News Summary, via Devdiscourse (25 Nov 2026)
- The Hindu, Morning Digest: November 25, 2026
- South China Morning Post, world headlines (25 Nov 2026)
- The Manila Times, World section (25 Nov 2026)

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `./out`). The output is
deterministic: two runs produce byte-identical files.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
