import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApprovalStatus = {
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
  ChangesRequested: "changes_requested",
  Expired: "expired",
  Cancelled: "cancelled",
} as const;
export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus] | (string & {});

export const approvalStatusSchema: EnumSchema<ApprovalStatus> = s.enumOf<ApprovalStatus>(ApprovalStatus);
