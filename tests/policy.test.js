import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 89,
    "capacity": 96,
    "latency": 18,
    "risk": 18,
    "weight": 13,
    "score": 154,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 99,
    "capacity": 73,
    "latency": 23,
    "risk": 16,
    "weight": 7,
    "score": 109,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 79,
    "capacity": 70,
    "latency": 26,
    "risk": 10,
    "weight": 8,
    "score": 102,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
