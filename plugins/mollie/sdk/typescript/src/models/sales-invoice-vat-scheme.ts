import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The VAT scheme to create the invoice for. You must be enrolled with One Stop Shop enabled to use
 * it.
 */
export const SalesInvoiceVatScheme = {
  Standard: "standard",
  OneStopShop: "one-stop-shop",
} as const;
export type SalesInvoiceVatScheme =
  | (typeof SalesInvoiceVatScheme)[keyof typeof SalesInvoiceVatScheme]
  | (string & {});

export const salesInvoiceVatSchemeSchema: EnumSchema<SalesInvoiceVatScheme> =
  s.enumOf<SalesInvoiceVatScheme>(SalesInvoiceVatScheme);
