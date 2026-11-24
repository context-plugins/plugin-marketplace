import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * *Conditional* Reflects the approval status of this task. This field is kept in sync with
 * `completed`, meaning `pending` translates to false while `approved`, `rejected`, and
 * `changes_requested` translate to true. If you set completed to true, this field will be set to
 * `approved`.
 */
export const ApprovalStatus = {
  Pending: "pending",
  Approved: "approved",
  Rejected: "rejected",
  ChangesRequested: "changes_requested",
} as const;
export type ApprovalStatus = (typeof ApprovalStatus)[keyof typeof ApprovalStatus] | (string & {});

export const approvalStatusSchema: EnumSchema<ApprovalStatus> = s.enumOf<ApprovalStatus>(ApprovalStatus);
