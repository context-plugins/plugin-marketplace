import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the instrument that was refunded. */
export const RefundTargetType3 = {
  PaymentMethod: "payment-method",
  GiftCardRedemption: "gift-card-redemption",
} as const;
export type RefundTargetType3 = (typeof RefundTargetType3)[keyof typeof RefundTargetType3] | (string & {});

export const refundTargetType3Schema: EnumSchema<RefundTargetType3> =
  s.enumOf<RefundTargetType3>(RefundTargetType3);
