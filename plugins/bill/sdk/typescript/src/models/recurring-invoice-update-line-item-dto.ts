import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3CreditMemosApiSchema,
  type ClassificationsBillV3CreditMemosApi,
} from "./classifications-bill-v3-credit-memos-api.js";

/** Line items that define a recurring invoice overall amount. */
export type RecurringInvoiceUpdateLineItemDto = {
  /** BILL-generated ID of the recurring invoice line item. The value begins with `ril`. */
  id: string;
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

const recurringInvoiceUpdateLineItemDtoProperties: s.Shape<RecurringInvoiceUpdateLineItemDto> = {
  id: s.string(),
  amount: s.optional(s.float64()),
  description: s.optional(s.string()),
  price: s.optional(s.float64()),
  quantity: s.optional(s.float64()),
  classifications: s.optional(s.lazy(() => classificationsBillV3CreditMemosApiSchema)),
};

export const recurringInvoiceUpdateLineItemDtoInternalSchema: Schema<RecurringInvoiceUpdateLineItemDto> =
  s.object<RecurringInvoiceUpdateLineItemDto>(recurringInvoiceUpdateLineItemDtoProperties, {
    additionalProperties: s.json(),
  });

export const recurringInvoiceUpdateLineItemDtoSchema: Schema<RecurringInvoiceUpdateLineItemDto> =
  s.lazySchema(() =>
    s.object<RecurringInvoiceUpdateLineItemDto>(
      {
        ...recurringInvoiceUpdateLineItemDtoProperties,
        id: s.string().check(s.minLength(1)),
        description: s.optional(s.string().check(s.maxLength(4000))),
      },
      { additionalProperties: s.json() },
    ),
  );
