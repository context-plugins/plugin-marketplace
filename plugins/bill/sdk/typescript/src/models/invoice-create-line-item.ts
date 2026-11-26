import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3CreditMemosApiSchema,
  type ClassificationsBillV3CreditMemosApi,
} from "./classifications-bill-v3-credit-memos-api.js";

/** Invoice Create Request Line Item. */
export type InvoiceCreateLineItem = {
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

const invoiceCreateLineItemProperties: s.Shape<InvoiceCreateLineItem> = {
  description: s.optional(s.string()),
  price: s.optional(s.float64()),
  quantity: s.float64(),
  classifications: s.optional(s.lazy(() => classificationsBillV3CreditMemosApiSchema)),
  taxable: s.optional(s.boolean()),
};

export const invoiceCreateLineItemInternalSchema: Schema<InvoiceCreateLineItem> =
  s.object<InvoiceCreateLineItem>(invoiceCreateLineItemProperties, { additionalProperties: s.json() });

export const invoiceCreateLineItemSchema: Schema<InvoiceCreateLineItem> = s.lazySchema(() =>
  s.object<InvoiceCreateLineItem>(
    {
      ...invoiceCreateLineItemProperties,
      description: s.optional(s.string().check(s.maxLength(4000))),
    },
    { additionalProperties: s.json() },
  ),
);
