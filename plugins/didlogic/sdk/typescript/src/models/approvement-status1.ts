import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Document approval status (in review = pending, verified = approved) */
export const ApprovementStatus1 = {
  InReview: "in review",
  Verified: "verified",
  Rejected: "rejected",
  Expired: "expired",
} as const;
export type ApprovementStatus1 = (typeof ApprovementStatus1)[keyof typeof ApprovementStatus1] | (string & {});

export const approvementStatus1Schema: EnumSchema<ApprovementStatus1> =
  s.enumOf<ApprovementStatus1>(ApprovementStatus1);
