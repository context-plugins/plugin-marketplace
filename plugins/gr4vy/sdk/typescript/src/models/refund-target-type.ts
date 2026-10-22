import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RefundTargetType = {
  PaymentMethod: "payment-method",
  GiftCardRedemption: "gift-card-redemption",
} as const;
export type RefundTargetType = (typeof RefundTargetType)[keyof typeof RefundTargetType] | (string & {});

export const refundTargetTypeSchema: EnumSchema<RefundTargetType> =
  s.enumOf<RefundTargetType>(RefundTargetType);
