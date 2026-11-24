import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The reason why this product is not available to use Possible values:
 *   * `order_amount_too_high` - 'This purchase is above your current spending limit with Tabby, try
 *     a smaller cart or use another payment method.'
 *   * `order_amount_too_low` - 'The purchase amount is below the minimum amount required to use
 *     Tabby, try adding more items or use another payment method.'
 *   * `not_available` - 'Sorry, Tabby is unable to approve this purchase, please use an alternative
 *     payment method for your order.'
 *   * `null` - if `is_available` is `true` and customer is able to use it.
 */
export const CheckoutProductRejectionReason = {
  OrderAmountTooHigh: "order_amount_too_high",
  OrderAmountTooLow: "order_amount_too_low",
  NotAvailable: "not_available",
  Null: "null",
} as const;
export type CheckoutProductRejectionReason =
  | (typeof CheckoutProductRejectionReason)[keyof typeof CheckoutProductRejectionReason]
  | (string & {});

export const checkoutProductRejectionReasonSchema: EnumSchema<CheckoutProductRejectionReason> =
  s.enumOf<CheckoutProductRejectionReason>(CheckoutProductRejectionReason);
