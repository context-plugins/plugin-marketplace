import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Manual review status for failed items */
export const ReviewStatus = {
  None: "None",
  InReview: "InReview",
  Verified: "Verified",
  Retried: "Retried",
} as const;
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus] | (string & {});

export const reviewStatusSchema: EnumSchema<ReviewStatus> = s.enumOf<ReviewStatus>(ReviewStatus);
