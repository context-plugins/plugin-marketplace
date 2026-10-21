import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of discount. */
export const SalesInvoiceDiscountType = {
  Amount: "amount",
  Percentage: "percentage",
} as const;
export type SalesInvoiceDiscountType =
  | (typeof SalesInvoiceDiscountType)[keyof typeof SalesInvoiceDiscountType]
  | (string & {});

export const salesInvoiceDiscountTypeSchema: EnumSchema<SalesInvoiceDiscountType> =
  s.enumOf<SalesInvoiceDiscountType>(SalesInvoiceDiscountType);
