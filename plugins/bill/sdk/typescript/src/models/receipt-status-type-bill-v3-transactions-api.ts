import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** ReceiptStatusType enum for Spend \& Expense Transactions. */
export const ReceiptStatusTypeBillV3TransactionsApi = {
  Validated: "VALIDATED",
  NotValidated: "NOT_VALIDATED",
  Attached: "ATTACHED",
  Missing: "MISSING",
  NotRequired: "NOT_REQUIRED",
  NotAttached: "NOT_ATTACHED",
} as const;
export type ReceiptStatusTypeBillV3TransactionsApi =
  | (typeof ReceiptStatusTypeBillV3TransactionsApi)[keyof typeof ReceiptStatusTypeBillV3TransactionsApi]
  | (string & {});

export const receiptStatusTypeBillV3TransactionsApiSchema: EnumSchema<ReceiptStatusTypeBillV3TransactionsApi> =
  s.enumOf<ReceiptStatusTypeBillV3TransactionsApi>(ReceiptStatusTypeBillV3TransactionsApi);
