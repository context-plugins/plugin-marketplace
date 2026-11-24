import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The anomaly's review state. */
export const ReviewStatus1 = {
  NeedsReview: "NEEDS_REVIEW",
  UnderReview: "UNDER_REVIEW",
  Resolved: "RESOLVED",
} as const;
export type ReviewStatus1 = (typeof ReviewStatus1)[keyof typeof ReviewStatus1] | (string & {});

export const reviewStatus1Schema: EnumSchema<ReviewStatus1> = s.enumOf<ReviewStatus1>(ReviewStatus1);
