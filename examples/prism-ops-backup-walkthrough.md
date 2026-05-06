# Prism Ops Backup Map Walkthrough

The fixture is intentionally compact, so the review starts with the cases that pull farthest apart.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | dry-run spread | 141 | ship |
| stress | rename risk | 232 | ship |
| edge | operator cost | 151 | ship |
| recovery | idempotence | 167 | ship |
| stale | dry-run spread | 181 | ship |

Start with `stress` and `baseline`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The useful comparison is `rename risk` against `dry-run spread`, not the raw score alone.
