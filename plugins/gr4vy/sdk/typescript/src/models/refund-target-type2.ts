import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The target type to refund for. This can be used to target a gift card to refund to instead of the
 * main payment method.
 */
export const RefundTargetType2 = {
  PaymentMethod: "payment-method",
  GiftCardRedemption: "gift-card-redemption",
} as const;
export type RefundTargetType2 = (typeof RefundTargetType2)[keyof typeof RefundTargetType2] | (string & {});

export const refundTargetType2Schema: EnumSchema<RefundTargetType2> =
  s.enumOf<RefundTargetType2>(RefundTargetType2);
