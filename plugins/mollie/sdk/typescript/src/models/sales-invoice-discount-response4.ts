import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  salesInvoiceDiscountTypeResponseSchema,
  type SalesInvoiceDiscountTypeResponse,
} from "./sales-invoice-discount-type-response.js";

/** The discount to be applied to the line item. */
export type SalesInvoiceDiscountResponse4 = {
  /** The type of discount. */
  type: SalesInvoiceDiscountTypeResponse;
  /** A string containing an exact monetary amount in the given currency, or the percentage. */
  value: string;
};

export const salesInvoiceDiscountResponse4Schema: Schema<SalesInvoiceDiscountResponse4> =
  s.object<SalesInvoiceDiscountResponse4>({
    type: salesInvoiceDiscountTypeResponseSchema,
    value: s.string(),
  });
