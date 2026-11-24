import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3CreditMemosApiSchema,
  type ClassificationsBillV3CreditMemosApi,
} from "./classifications-bill-v3-credit-memos-api.js";

/** Recurring Invoice Line Item. */
export type RecurringInvoiceLineItemResponseDto = {
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
  /** Set as `true` if the recurring invoice line item is taxable */
  taxable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recurringInvoiceLineItemResponseDtoSchema: Schema<RecurringInvoiceLineItemResponseDto> =
  s.object<RecurringInvoiceLineItemResponseDto>(
    {
      id: s.optional(s.string()),
      amount: s.optional(s.float64()),
      description: s.optional(s.string()),
      price: s.optional(s.float64()),
      quantity: s.optional(s.float64()),
      classifications: s.optional(s.lazy(() => classificationsBillV3CreditMemosApiSchema)),
      taxable: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
