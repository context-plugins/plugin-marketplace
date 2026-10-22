import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  salesInvoiceDiscountTypeResponseSchema,
  type SalesInvoiceDiscountTypeResponse,
} from "./sales-invoice-discount-type-response.js";

export type SalesInvoiceDiscountResponse = {
  /** The type of discount. */
  type: SalesInvoiceDiscountTypeResponse;
  /** A string containing an exact monetary amount in the given currency, or the percentage. */
  value: string;
};

export const salesInvoiceDiscountResponseSchema: Schema<SalesInvoiceDiscountResponse> =
  s.object<SalesInvoiceDiscountResponse>({
    type: salesInvoiceDiscountTypeResponseSchema,
    value: s.string(),
  });
