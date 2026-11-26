import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing the payment status of a billing statement. */
export const BillingStatementPaymentStatus = {
  Unpaid: "UNPAID",
  Paid: "PAID",
  Pending: "PENDING",
  Failed: "FAILED",
  Voided: "VOIDED",
  Undefined: "UNDEFINED",
} as const;
export type BillingStatementPaymentStatus =
  | (typeof BillingStatementPaymentStatus)[keyof typeof BillingStatementPaymentStatus]
  | (string & {});

export const billingStatementPaymentStatusSchema: EnumSchema<BillingStatementPaymentStatus> =
  s.enumOf<BillingStatementPaymentStatus>(BillingStatementPaymentStatus);
