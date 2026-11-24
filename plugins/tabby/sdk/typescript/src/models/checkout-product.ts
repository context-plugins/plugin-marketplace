import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  checkoutProductRejectionReasonSchema,
  type CheckoutProductRejectionReason,
} from "./checkout-product-rejection-reason.js";

export type CheckoutProduct = {
  /** Type of product. @default "installments" */
  type?: "installments";
  isAvailable: boolean;
  /**
   * The reason why this product is not available to use Possible values:
   *   * `order_amount_too_high` - 'This purchase is above your current spending limit with Tabby,
   *     try a smaller cart or use another payment method.'
   *   * `order_amount_too_low` - 'The purchase amount is below the minimum amount required to use
   *     Tabby, try adding more items or use another payment method.'
   *   * `not_available` - 'Sorry, Tabby is unable to approve this purchase, please use an
   *     alternative payment method for your order.'
   *   * `null` - if `is_available` is `true` and customer is able to use it.
   */
  rejectionReason?: CheckoutProductRejectionReason | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutProductSchema: Schema<CheckoutProduct> = s.object<CheckoutProduct>(
  {
    type: s.defaulted(s.literal("installments"), "installments"),
    isAvailable: s.boolean(),
    rejectionReason: s.optionalNullable(s.lazy(() => checkoutProductRejectionReasonSchema)),
    _keysMap: {
      isAvailable: "is_available",
      rejectionReason: "rejection_reason",
    },
  },
  { additionalProperties: s.json() },
);
