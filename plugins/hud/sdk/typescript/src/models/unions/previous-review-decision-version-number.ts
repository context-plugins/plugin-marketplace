import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PreviousReviewDecisionVersionNumber = number;

export const previousReviewDecisionVersionNumberSchema: Schema<PreviousReviewDecisionVersionNumber> =
  s.of<PreviousReviewDecisionVersionNumber>(s.union([s.int()]));
