import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the invoice. */
export const InvoiceStatus = {
  Open: "open",
  Paid: "paid",
  Overdue: "overdue",
} as const;
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus] | (string & {});

export const invoiceStatusSchema: EnumSchema<InvoiceStatus> = s.enumOf<InvoiceStatus>(InvoiceStatus);
