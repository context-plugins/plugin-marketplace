import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApprovementStatus = {
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
  Expired: "expired",
  InReview: "in review",
  Verified: "verified",
} as const;
export type ApprovementStatus = (typeof ApprovementStatus)[keyof typeof ApprovementStatus] | (string & {});

export const approvementStatusSchema: EnumSchema<ApprovementStatus> =
  s.enumOf<ApprovementStatus>(ApprovementStatus);
