# prism-ops-backup-map

`prism-ops-backup-map` is a compact JavaScript repository for automation, centered on this goal: Develop a JavaScript command-oriented project for backup scenarios with windowed input fixtures, late-data behavior checks, and fixture-scale datasets.

## Reason For The Project

This is intentionally local and self-contained so it can be inspected without credentials, services, or seeded history.

## Prism Ops Backup Map Review Notes

Start with `rename risk` and `dry-run spread`. Those cases create the widest score spread in this repo, so they are the best quick check when the model changes.

## What It Does

- `fixtures/domain_review.csv` adds cases for dry-run spread and rename risk.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/prism-ops-backup-walkthrough.md` walks through the case spread.
- The JavaScript code includes a review path for `rename risk` and `dry-run spread`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## How It Is Put Together

The implementation keeps the scoring rule plain: reward signal and confidence, preserve slack, penalize drag, then classify the result into a review lane.

The added JavaScript path is deliberately direct, with fixtures doing most of the explaining.

## Run It

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Check It

The verifier is intentionally local. It should fail if the fixture score math, lane assignment, or language-specific test drifts.

## Boundaries

No external service is required. A deeper version would add more negative cases and a clearer boundary around invalid input.
