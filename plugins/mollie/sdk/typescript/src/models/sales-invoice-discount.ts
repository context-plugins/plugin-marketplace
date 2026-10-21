import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  salesInvoiceDiscountTypeSchema,
  type SalesInvoiceDiscountType,
} from "./sales-invoice-discount-type.js";

export type SalesInvoiceDiscount = {
  /** The type of discount. */
  type: SalesInvoiceDiscountType;
  /** A string containing an exact monetary amount in the given currency, or the percentage. */
  value: string;
};

export const salesInvoiceDiscountSchema: Schema<SalesInvoiceDiscount> = s.object<SalesInvoiceDiscount>({
  type: salesInvoiceDiscountTypeSchema,
  value: s.string(),
});
