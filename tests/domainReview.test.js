import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 48, slack: 49, drag: 25, confidence: 71 };
assert.equal(domainReviewScore(item), 141);
assert.equal(domainReviewLane(item), "ship");
