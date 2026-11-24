import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3CreditMemosApiSchema,
  type ClassificationsBillV3CreditMemosApi,
} from "./classifications-bill-v3-credit-memos-api.js";

/** Invoice Update Request Line Item. */
export type InvoiceUpdateLineItem = {
  /** BILL-generated ID of the invoice line item. The value begins with `00f`. */
  id: string;
  /** Invoice line item description */
  description?: string;
  /**
   * Invoice line item unit price. For an invoice in an international currency (not USD), this value
   * is in the local currency.
   */
  price?: number;
  /** Invoice line item unit quantity */
  quantity?: number;
  classifications?: ClassificationsBillV3CreditMemosApi;
  /** Set as true if the invoice line item is taxable */
  taxable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invoiceUpdateLineItemProperties: s.Shape<InvoiceUpdateLineItem> = {
  id: s.string(),
  description: s.optional(s.string()),
  price: s.optional(s.float64()),
  quantity: s.optional(s.float64()),
  classifications: s.optional(s.lazy(() => classificationsBillV3CreditMemosApiSchema)),
  taxable: s.optional(s.boolean()),
};

export const invoiceUpdateLineItemInternalSchema: Schema<InvoiceUpdateLineItem> =
  s.object<InvoiceUpdateLineItem>(invoiceUpdateLineItemProperties, { additionalProperties: s.json() });

export const invoiceUpdateLineItemSchema: Schema<InvoiceUpdateLineItem> = s.lazySchema(() =>
  s.object<InvoiceUpdateLineItem>(
    {
      ...invoiceUpdateLineItemProperties,
      description: s.optional(s.string().check(s.maxLength(4000))),
    },
    { additionalProperties: s.json() },
  ),
);
