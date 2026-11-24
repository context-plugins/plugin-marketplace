import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3CreditMemosApiSchema,
  type ClassificationsBillV3CreditMemosApi,
} from "./classifications-bill-v3-credit-memos-api.js";

/** Recurring Invoice Create Request Line Item. */
export type RecurringInvoiceLineItemDto = {
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

const recurringInvoiceLineItemDtoProperties: s.Shape<RecurringInvoiceLineItemDto> = {
  amount: s.optional(s.float64()),
  description: s.optional(s.string()),
  price: s.optional(s.float64()),
  quantity: s.optional(s.float64()),
  classifications: s.optional(s.lazy(() => classificationsBillV3CreditMemosApiSchema)),
};

export const recurringInvoiceLineItemDtoInternalSchema: Schema<RecurringInvoiceLineItemDto> =
  s.object<RecurringInvoiceLineItemDto>(recurringInvoiceLineItemDtoProperties, {
    additionalProperties: s.json(),
  });

export const recurringInvoiceLineItemDtoSchema: Schema<RecurringInvoiceLineItemDto> = s.lazySchema(() =>
  s.object<RecurringInvoiceLineItemDto>(
    {
      ...recurringInvoiceLineItemDtoProperties,
      description: s.optional(s.string().check(s.maxLength(4000))),
    },
    { additionalProperties: s.json() },
  ),
);
