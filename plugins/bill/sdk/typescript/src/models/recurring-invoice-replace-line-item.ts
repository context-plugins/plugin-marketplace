import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3CreditMemosApiSchema,
  type ClassificationsBillV3CreditMemosApi,
} from "./classifications-bill-v3-credit-memos-api.js";

/** Replace RecurringInvoice line item request Dto. */
export type RecurringInvoiceReplaceLineItem = {
  /** BILL-generated ID of the recurring invoice line item. The value begins with `ril`. */
  id?: string;
  /**
   * Recurring invoice line item amount. For a recurring invoice in an international currency (not
   * USD), this value is in the local currency.
   */
  amount?: number;
  /** Recurring invoice line item description */
  description?: string;
  /**
   * Recurring invoice line item unit price. For a recurring invoice in an international currency
   * (not USD), this value is in the local currency.
   */
  price?: number;
  /** Recurring invoice line item unit quantity */
  quantity?: number;
  classifications?: ClassificationsBillV3CreditMemosApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recurringInvoiceReplaceLineItemProperties: s.Shape<RecurringInvoiceReplaceLineItem> = {
  id: s.optional(s.string()),
  amount: s.optional(s.float64()),
  description: s.optional(s.string()),
  price: s.optional(s.float64()),
  quantity: s.optional(s.float64()),
  classifications: s.optional(s.lazy(() => classificationsBillV3CreditMemosApiSchema)),
};

export const recurringInvoiceReplaceLineItemInternalSchema: Schema<RecurringInvoiceReplaceLineItem> =
  s.object<RecurringInvoiceReplaceLineItem>(recurringInvoiceReplaceLineItemProperties, {
    additionalProperties: s.json(),
  });

export const recurringInvoiceReplaceLineItemSchema: Schema<RecurringInvoiceReplaceLineItem> = s.lazySchema(
  () =>
    s.object<RecurringInvoiceReplaceLineItem>(
      {
        ...recurringInvoiceReplaceLineItemProperties,
        description: s.optional(s.string().check(s.maxLength(4000))),
      },
      { additionalProperties: s.json() },
    ),
);
