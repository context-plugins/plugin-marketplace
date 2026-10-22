import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Coupon number associated with the leg. */
export type CouponNumber = string;

export const couponNumberSchema: Schema<CouponNumber> = s.of<CouponNumber>(s.union([s.string()]));
