import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing the status for a reimbursement in the Spend API. */
export const ReimbursementStatus = {
  Created: "CREATED",
  AwaitingApproval: "AWAITING_APPROVAL",
  AwaitingTier2Approval: "AWAITING_TIER2_APPROVAL",
  Tier2ApprovalUndone: "TIER2_APPROVAL_UNDONE",
  ApprovalUndone: "APPROVAL_UNDONE",
  DenialUndone: "DENIAL_UNDONE",
  Approved: "APPROVED",
  CancelPayment: "CANCEL_PAYMENT",
  Paid: "PAID",
  PaymentFailed: "PAYMENT_FAILED",
  Denied: "DENIED",
  Deleted: "DELETED",
  Archived: "ARCHIVED",
  BudgetApproval: "BUDGET_APPROVAL",
  AdminApproval: "ADMIN_APPROVAL",
  ReadyToPay: "READY_TO_PAY",
  PaymentPending: "PAYMENT_PENDING",
} as const;
export type ReimbursementStatus =
  | (typeof ReimbursementStatus)[keyof typeof ReimbursementStatus]
  | (string & {});

export const reimbursementStatusSchema: EnumSchema<ReimbursementStatus> =
  s.enumOf<ReimbursementStatus>(ReimbursementStatus);
