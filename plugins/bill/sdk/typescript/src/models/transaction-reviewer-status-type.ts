import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Spend \& Expense transactions reviewer status type. */
export const TransactionReviewerStatusType = {
  Waiting: "WAITING",
  Approved: "APPROVED",
  Denied: "DENIED",
} as const;
export type TransactionReviewerStatusType =
  | (typeof TransactionReviewerStatusType)[keyof typeof TransactionReviewerStatusType]
  | (string & {});

export const transactionReviewerStatusTypeSchema: EnumSchema<TransactionReviewerStatusType> =
  s.enumOf<TransactionReviewerStatusType>(TransactionReviewerStatusType);
