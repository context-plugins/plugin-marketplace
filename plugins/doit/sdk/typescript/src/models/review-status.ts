import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The review state to move the anomaly to. */
export const ReviewStatus = {
  NeedsReview: "NEEDS_REVIEW",
  UnderReview: "UNDER_REVIEW",
  Resolved: "RESOLVED",
} as const;
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus] | (string & {});

export const reviewStatusSchema: EnumSchema<ReviewStatus> = s.enumOf<ReviewStatus>(ReviewStatus);
