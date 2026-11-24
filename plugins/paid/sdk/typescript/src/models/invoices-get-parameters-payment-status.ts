import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoicesGetParametersPaymentStatus = {
  Pending: "pending",
  Paid: "paid",
  PartiallyPaid: "partiallyPaid",
  Overdue: "overdue",
  Error: "error",
} as const;
export type InvoicesGetParametersPaymentStatus =
  | (typeof InvoicesGetParametersPaymentStatus)[keyof typeof InvoicesGetParametersPaymentStatus]
  | (string & {});

export const invoicesGetParametersPaymentStatusSchema: EnumSchema<InvoicesGetParametersPaymentStatus> =
  s.enumOf<InvoicesGetParametersPaymentStatus>(InvoicesGetParametersPaymentStatus);
