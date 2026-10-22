import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The payment term to be set on the invoice. */
export const SalesInvoicePaymentTerm = {
  _7Days: "7 days",
  _14Days: "14 days",
  _30Days: "30 days",
  _45Days: "45 days",
  _60Days: "60 days",
  _90Days: "90 days",
  _120Days: "120 days",
} as const;
export type SalesInvoicePaymentTerm =
  | (typeof SalesInvoicePaymentTerm)[keyof typeof SalesInvoicePaymentTerm]
  | (string & {});

export const salesInvoicePaymentTermSchema: EnumSchema<SalesInvoicePaymentTerm> =
  s.enumOf<SalesInvoicePaymentTerm>(SalesInvoicePaymentTerm);
