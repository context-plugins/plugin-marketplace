import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Invoice status enum. */
export const InvoiceStatus = {
  PaidInFull: "PAID_IN_FULL",
  Open: "OPEN",
  PartialPayment: "PARTIAL_PAYMENT",
  Scheduled: "SCHEDULED",
  Undefined: "UNDEFINED",
} as const;
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus] | (string & {});

export const invoiceStatusSchema: EnumSchema<InvoiceStatus> = s.enumOf<InvoiceStatus>(InvoiceStatus);
