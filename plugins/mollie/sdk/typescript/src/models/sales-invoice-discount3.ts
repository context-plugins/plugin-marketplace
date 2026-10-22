import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  salesInvoiceDiscountTypeSchema,
  type SalesInvoiceDiscountType,
} from "./sales-invoice-discount-type.js";

/** The discount to be applied to the entire invoice, possibly on top of the line item discounts. */
export type SalesInvoiceDiscount3 = {
  /** The type of discount. */
  type: SalesInvoiceDiscountType;
  /** A string containing an exact monetary amount in the given currency, or the percentage. */
  value: string;
};

export const salesInvoiceDiscount3Schema: Schema<SalesInvoiceDiscount3> = s.object<SalesInvoiceDiscount3>({
  type: salesInvoiceDiscountTypeSchema,
  value: s.string(),
});
