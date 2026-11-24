import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** BillingStatementDetailLineItem response Dto. */
export type BillingStatementDetailLineItemDto = {
  /** Billing invoice line item quantity */
  quantity?: number;
  /** Billing invoice line item description */
  description?: string;
  /** Billing invoice line item type */
  type?: string;
  /** Billing invoice line item amount */
  amount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billingStatementDetailLineItemDtoSchema: Schema<BillingStatementDetailLineItemDto> =
  s.object<BillingStatementDetailLineItemDto>(
    {
      quantity: s.optional(s.int()),
      description: s.optional(s.string()),
      type: s.optional(s.string()),
      amount: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
