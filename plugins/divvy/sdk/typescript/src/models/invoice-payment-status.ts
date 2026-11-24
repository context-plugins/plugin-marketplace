import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Invoice payment status enum. */
export const InvoicePaymentStatus = {
  Paid: "PAID",
  Void: "VOID",
  Scheduled: "SCHEDULED",
  Canceled: "CANCELED",
  Initiated: "INITIATED",
  Undefined: "UNDEFINED",
} as const;
export type InvoicePaymentStatus =
  | (typeof InvoicePaymentStatus)[keyof typeof InvoicePaymentStatus]
  | (string & {});

export const invoicePaymentStatusSchema: EnumSchema<InvoicePaymentStatus> =
  s.enumOf<InvoicePaymentStatus>(InvoicePaymentStatus);
