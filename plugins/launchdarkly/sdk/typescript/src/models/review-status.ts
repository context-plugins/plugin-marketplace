import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the review of this approval request */
export const ReviewStatus = {
  Approved: "approved",
  Declined: "declined",
  Pending: "pending",
} as const;
export type ReviewStatus = (typeof ReviewStatus)[keyof typeof ReviewStatus] | (string & {});

export const reviewStatusSchema: EnumSchema<ReviewStatus> = s.enumOf<ReviewStatus>(ReviewStatus);
