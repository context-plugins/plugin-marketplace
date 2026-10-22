import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  salesInvoiceDiscountTypeSchema,
  type SalesInvoiceDiscountType,
} from "./sales-invoice-discount-type.js";

/** The discount to be applied to the line item. */
export type SalesInvoiceDiscount1 = {
  /** The type of discount. */
  type: SalesInvoiceDiscountType;
  /** A string containing an exact monetary amount in the given currency, or the percentage. */
  value: string;
};

export const salesInvoiceDiscount1Schema: Schema<SalesInvoiceDiscount1> = s.object<SalesInvoiceDiscount1>({
  type: salesInvoiceDiscountTypeSchema,
  value: s.string(),
});
