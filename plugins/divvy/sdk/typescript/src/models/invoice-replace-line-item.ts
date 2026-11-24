import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3CreditMemosApiSchema,
  type ClassificationsBillV3CreditMemosApi,
} from "./classifications-bill-v3-credit-memos-api.js";

/** Invoice Replace Request Line Item. */
export type InvoiceReplaceLineItem = {
  /** BILL-generated ID of the invoice line item. The value begins with `00f`. */
  id?: string;
  /** Invoice line item description */
  description?: string;
  /**
   * Invoice line item unit price. For an invoice in an international currency (not USD), this value
   * is in the local currency.
   */
  price?: number;
  /** Invoice line item unit quantity */
  quantity: number;
  classifications?: ClassificationsBillV3CreditMemosApi;
  /** Set as true if the invoice line item is taxable */
  taxable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const invoiceReplaceLineItemProperties: s.Shape<InvoiceReplaceLineItem> = {
  id: s.optional(s.string()),
  description: s.optional(s.string()),
  price: s.optional(s.float64()),
  quantity: s.float64(),
  classifications: s.optional(s.lazy(() => classificationsBillV3CreditMemosApiSchema)),
  taxable: s.optional(s.boolean()),
};

export const invoiceReplaceLineItemInternalSchema: Schema<InvoiceReplaceLineItem> =
  s.object<InvoiceReplaceLineItem>(invoiceReplaceLineItemProperties, { additionalProperties: s.json() });

export const invoiceReplaceLineItemSchema: Schema<InvoiceReplaceLineItem> = s.lazySchema(() =>
  s.object<InvoiceReplaceLineItem>(
    {
      ...invoiceReplaceLineItemProperties,
      description: s.optional(s.string().check(s.maxLength(4000))),
    },
    { additionalProperties: s.json() },
  ),
);
