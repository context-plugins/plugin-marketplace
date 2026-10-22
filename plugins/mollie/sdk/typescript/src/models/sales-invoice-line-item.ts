import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount31Schema, type Amount31 } from "./amount31.js";
import { salesInvoiceDiscount1Schema, type SalesInvoiceDiscount1 } from "./sales-invoice-discount1.js";

export type SalesInvoiceLineItem = {
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
  discount?: SalesInvoiceDiscount1 | null;
};

export const salesInvoiceLineItemSchema: Schema<SalesInvoiceLineItem> = s.object<SalesInvoiceLineItem>({
  description: s.string(),
  quantity: s.int(),
  vatRate: s.string(),
  unitPrice: amount31Schema,
  discount: s.optionalNullable(s.lazy(() => salesInvoiceDiscount1Schema)),
});
