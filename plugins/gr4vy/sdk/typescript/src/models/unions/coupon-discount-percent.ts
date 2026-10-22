import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The percentage discount applied via the coupon. */
export type CouponDiscountPercent = string;

export const couponDiscountPercentSchema: Schema<CouponDiscountPercent> = s.of<CouponDiscountPercent>(
  s.union([s.string()]),
);
