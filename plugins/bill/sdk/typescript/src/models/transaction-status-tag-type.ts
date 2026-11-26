import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** StatusTag enum for Spend \& Expense Transactions. */
export const TransactionStatusTagType = {
  Approved: "APPROVED",
  Complete: "COMPLETE",
  Declined: "DECLINED",
  Denied: "DENIED",
  DisputeLost: "DISPUTE_LOST",
  DisputeUpdate: "DISPUTE_UPDATE",
  DisputeWon: "DISPUTE_WON",
  Disputed: "DISPUTED",
  DoNotSync: "DO_NOT_SYNC",
  Incomplete: "INCOMPLETE",
  None: "NONE",
  Pending: "PENDING",
  PtrIncomplete: "PTR_INCOMPLETE",
  PtrNeedsYourApproval: "PTR_NEEDS_YOUR_APPROVAL",
  PtrPendingApproval: "PTR_PENDING_APPROVAL",
  PtrUpcomingApproval: "PTR_UPCOMING_APPROVAL",
  Reviewed: "REVIEWED",
} as const;
export type TransactionStatusTagType =
  | (typeof TransactionStatusTagType)[keyof typeof TransactionStatusTagType]
  | (string & {});

export const transactionStatusTagTypeSchema: EnumSchema<TransactionStatusTagType> =
  s.enumOf<TransactionStatusTagType>(TransactionStatusTagType);
