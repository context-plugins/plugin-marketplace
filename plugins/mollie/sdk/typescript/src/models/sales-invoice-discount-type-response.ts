import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of discount. */
export const SalesInvoiceDiscountTypeResponse = {
  Amount: "amount",
  Percentage: "percentage",
} as const;
export type SalesInvoiceDiscountTypeResponse =
  | (typeof SalesInvoiceDiscountTypeResponse)[keyof typeof SalesInvoiceDiscountTypeResponse]
  | (string & {});

export const salesInvoiceDiscountTypeResponseSchema: EnumSchema<SalesInvoiceDiscountTypeResponse> =
  s.enumOf<SalesInvoiceDiscountTypeResponse>(SalesInvoiceDiscountTypeResponse);
