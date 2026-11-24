import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceLinePaymentStatus = {
  Pending: "pending",
  Paid: "paid",
  PartiallyPaid: "partiallyPaid",
  Overdue: "overdue",
  Error: "error",
} as const;
export type InvoiceLinePaymentStatus =
  | (typeof InvoiceLinePaymentStatus)[keyof typeof InvoiceLinePaymentStatus]
  | (string & {});

export const invoiceLinePaymentStatusSchema: EnumSchema<InvoiceLinePaymentStatus> =
  s.enumOf<InvoiceLinePaymentStatus>(InvoiceLinePaymentStatus);
