import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Approval state for purchases of this commitment type. Approve or pause on the Planned Purchases
 * tab in the DoiT Console. Absent or unrecognized stored values are returned as `pending_approval`,
 * except on autonomous automation-mode lines, where they are returned as `approved` since no
 * customer approval is required.
 */
export const PurchaseApprovalStatus = {
  PendingApproval: "pending_approval",
  Approved: "approved",
  Paused: "paused",
} as const;
export type PurchaseApprovalStatus =
  | (typeof PurchaseApprovalStatus)[keyof typeof PurchaseApprovalStatus]
  | (string & {});

export const purchaseApprovalStatusSchema: EnumSchema<PurchaseApprovalStatus> =
  s.enumOf<PurchaseApprovalStatus>(PurchaseApprovalStatus);
