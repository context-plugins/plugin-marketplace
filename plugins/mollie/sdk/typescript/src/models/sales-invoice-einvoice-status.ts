import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The e-invoice submission status for the invoice, if it was configured to be an e-invoice. */
export const SalesInvoiceEInvoiceStatus = {
  Issuing: "issuing",
  Issued: "issued",
  Failed: "failed",
} as const;
export type SalesInvoiceEInvoiceStatus =
  | (typeof SalesInvoiceEInvoiceStatus)[keyof typeof SalesInvoiceEInvoiceStatus]
  | (string & {});

export const salesInvoiceEInvoiceStatusSchema: EnumSchema<SalesInvoiceEInvoiceStatus> =
  s.enumOf<SalesInvoiceEInvoiceStatus>(SalesInvoiceEInvoiceStatus);
