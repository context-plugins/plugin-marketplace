import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** ReceiptStatusType enum for Spend \& Expense Transactions. */
export const ReceiptStatusType = {
  Validated: "VALIDATED",
  NotValidated: "NOT_VALIDATED",
  Attached: "ATTACHED",
  Missing: "MISSING",
  NotRequired: "NOT_REQUIRED",
  NotAttached: "NOT_ATTACHED",
  Unspecified: "UNSPECIFIED",
} as const;
export type ReceiptStatusType = (typeof ReceiptStatusType)[keyof typeof ReceiptStatusType] | (string & {});

export const receiptStatusTypeSchema: EnumSchema<ReceiptStatusType> =
  s.enumOf<ReceiptStatusType>(ReceiptStatusType);
