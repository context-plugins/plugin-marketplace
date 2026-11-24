import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoicePaymentStatus = {
  Pending: "pending",
  Paid: "paid",
  PartiallyPaid: "partiallyPaid",
  Overdue: "overdue",
  Error: "error",
} as const;
export type InvoicePaymentStatus =
  | (typeof InvoicePaymentStatus)[keyof typeof InvoicePaymentStatus]
  | (string & {});

export const invoicePaymentStatusSchema: EnumSchema<InvoicePaymentStatus> =
  s.enumOf<InvoicePaymentStatus>(InvoicePaymentStatus);
