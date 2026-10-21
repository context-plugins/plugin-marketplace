import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The VAT scheme to create the invoice for. You must be enrolled with One Stop Shop enabled to use
 * it.
 */
export const SalesInvoiceVatSchemeResponse = {
  Standard: "standard",
  OneStopShop: "one-stop-shop",
} as const;
export type SalesInvoiceVatSchemeResponse =
  | (typeof SalesInvoiceVatSchemeResponse)[keyof typeof SalesInvoiceVatSchemeResponse]
  | (string & {});

export const salesInvoiceVatSchemeResponseSchema: EnumSchema<SalesInvoiceVatSchemeResponse> =
  s.enumOf<SalesInvoiceVatSchemeResponse>(SalesInvoiceVatSchemeResponse);
