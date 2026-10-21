import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount31Schema, type Amount31 } from "./amount31.js";
import {
  salesInvoiceDiscountResponse4Schema,
  type SalesInvoiceDiscountResponse4,
} from "./sales-invoice-discount-response4.js";

export type SalesInvoiceLineItemResponse = {
  /** A description of the line item. For example *LEGO 4440 Forest Police Station*. */
  description: string;
  /** The number of items. */
  quantity: number;
  /** The vat rate to be applied to this line item. */
  vatRate: string;
  /**
   * The price of a single item excluding VAT.
   *
   * For example: `{"currency":"EUR", "value":"89.00"}` if the box of LEGO costs €89.00 each.
   *
   * The unit price can be zero in case of free items.
   */
  unitPrice: Amount31;
  /** The discount to be applied to the line item. */
  discount?: SalesInvoiceDiscountResponse4 | null;
};

export const salesInvoiceLineItemResponseSchema: Schema<SalesInvoiceLineItemResponse> =
  s.object<SalesInvoiceLineItemResponse>({
    description: s.string(),
    quantity: s.int(),
    vatRate: s.string(),
    unitPrice: amount31Schema,
    discount: s.optionalNullable(s.lazy(() => salesInvoiceDiscountResponse4Schema)),
  });
