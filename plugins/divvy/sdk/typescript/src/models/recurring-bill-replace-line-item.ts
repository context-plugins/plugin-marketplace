import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classificationsBillV3RecurringbillsApiSchema,
  type ClassificationsBillV3RecurringbillsApi,
} from "./classifications-bill-v3-recurringbills-api.js";

/** Line items that define a bill's overall amount. */
export type RecurringBillReplaceLineItem = {
  /** BILL-generated ID of the recurring bill line item. The value begins with `tli`. */
  id?: string;
  /**
   * Recurring bill line item amount. For a bill in an international currency (not USD), this value
   * is in the local currency.
   */
  amount: number;
  /** Recurring bill line item description */
  description?: string;
  /** Recurring bill line item price */
  price?: number;
  /** Recurring bill line item quantity */
  quantity?: number;
  classifications?: ClassificationsBillV3RecurringbillsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recurringBillReplaceLineItemProperties: s.Shape<RecurringBillReplaceLineItem> = {
  id: s.optional(s.string()),
  amount: s.float64(),
  description: s.optional(s.string()),
  price: s.optional(s.float64()),
  quantity: s.optional(s.float64()),
  classifications: s.optional(s.lazy(() => classificationsBillV3RecurringbillsApiSchema)),
};

export const recurringBillReplaceLineItemInternalSchema: Schema<RecurringBillReplaceLineItem> =
  s.object<RecurringBillReplaceLineItem>(recurringBillReplaceLineItemProperties, {
    additionalProperties: s.json(),
  });

export const recurringBillReplaceLineItemSchema: Schema<RecurringBillReplaceLineItem> = s.lazySchema(() =>
  s.object<RecurringBillReplaceLineItem>(
    {
      ...recurringBillReplaceLineItemProperties,
      description: s.optional(s.string().check(s.maxLength(4000))),
    },
    { additionalProperties: s.json() },
  ),
);
