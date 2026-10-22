import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  salesInvoiceDiscountTypeSchema,
  type SalesInvoiceDiscountType,
} from "./sales-invoice-discount-type.js";

/** The discount to be applied to the entire invoice, applied on top of any line item discounts. */
export type SalesInvoiceDiscount2 = {
  /** The type of discount. */
  type: SalesInvoiceDiscountType;
  /** A string containing an exact monetary amount in the given currency, or the percentage. */
  value: string;
};

export const salesInvoiceDiscount2Schema: Schema<SalesInvoiceDiscount2> = s.object<SalesInvoiceDiscount2>({
  type: salesInvoiceDiscountTypeSchema,
  value: s.string(),
});
