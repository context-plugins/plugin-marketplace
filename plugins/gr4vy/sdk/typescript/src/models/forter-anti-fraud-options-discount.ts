import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { couponDiscountAmountSchema, type CouponDiscountAmount } from "./unions/coupon-discount-amount.js";
import { couponDiscountPercentSchema, type CouponDiscountPercent } from "./unions/coupon-discount-percent.js";

export type ForterAntiFraudOptionsDiscount = {
  /** The coupon code applied to the order. */
  couponCodeUsed: string;
  /** The type of discount applied to the order. */
  discountType: string;
  /** Monetary details of the discount amount. */
  couponDiscountAmount?: CouponDiscountAmount;
  /** The percentage discount applied via the coupon. */
  couponDiscountPercent?: CouponDiscountPercent;
};

export const forterAntiFraudOptionsDiscountSchema: Schema<ForterAntiFraudOptionsDiscount> =
  s.object<ForterAntiFraudOptionsDiscount>({
    couponCodeUsed: s.string(),
    discountType: s.string(),
    couponDiscountAmount: s.optional(s.lazy(() => couponDiscountAmountSchema)),
    couponDiscountPercent: s.optional(s.lazy(() => couponDiscountPercentSchema)),
    _keysMap: {
      couponCodeUsed: "coupon_code_used",
      discountType: "discount_type",
      couponDiscountAmount: "coupon_discount_amount",
      couponDiscountPercent: "coupon_discount_percent",
    },
  });
