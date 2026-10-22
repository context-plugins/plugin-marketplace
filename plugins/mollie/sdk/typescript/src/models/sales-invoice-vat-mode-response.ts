import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The VAT mode to use for VAT calculation. `exclusive` mode means we will apply the relevant VAT on
 * top of the price. `inclusive` means the prices you are providing to us already contain the VAT
 * you want to apply.
 */
export const SalesInvoiceVatModeResponse = {
  Exclusive: "exclusive",
  Inclusive: "inclusive",
} as const;
export type SalesInvoiceVatModeResponse =
  | (typeof SalesInvoiceVatModeResponse)[keyof typeof SalesInvoiceVatModeResponse]
  | (string & {});

export const salesInvoiceVatModeResponseSchema: EnumSchema<SalesInvoiceVatModeResponse> =
  s.enumOf<SalesInvoiceVatModeResponse>(SalesInvoiceVatModeResponse);
