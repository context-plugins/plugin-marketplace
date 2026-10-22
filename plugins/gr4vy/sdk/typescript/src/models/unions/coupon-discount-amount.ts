import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  forterAntiFraudOptionsDiscountCouponDiscountAmountSchema,
  type ForterAntiFraudOptionsDiscountCouponDiscountAmount,
} from "../forter-anti-fraud-options-discount-coupon-discount-amount.js";

/** Monetary details of the discount amount. */
export type CouponDiscountAmount = ForterAntiFraudOptionsDiscountCouponDiscountAmount;

export const couponDiscountAmountSchema: Schema<CouponDiscountAmount> = s.of<CouponDiscountAmount>(
  s.union([s.lazy(() => forterAntiFraudOptionsDiscountCouponDiscountAmountSchema)]),
);
