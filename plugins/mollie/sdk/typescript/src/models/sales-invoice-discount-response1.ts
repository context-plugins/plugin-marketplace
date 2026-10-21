import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  salesInvoiceDiscountTypeResponseSchema,
  type SalesInvoiceDiscountTypeResponse,
} from "./sales-invoice-discount-type-response.js";

/** The discount to be applied to the entire invoice, applied on top of any line item discounts. */
export type SalesInvoiceDiscountResponse1 = {
  /** The type of discount. */
  type: SalesInvoiceDiscountTypeResponse;
  /** A string containing an exact monetary amount in the given currency, or the percentage. */
  value: string;
};

export const salesInvoiceDiscountResponse1Schema: Schema<SalesInvoiceDiscountResponse1> =
  s.object<SalesInvoiceDiscountResponse1>({
    type: salesInvoiceDiscountTypeResponseSchema,
    value: s.string(),
  });
