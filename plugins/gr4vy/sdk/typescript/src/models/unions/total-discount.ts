import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  forterAntiFraudOptionsDiscountSchema,
  type ForterAntiFraudOptionsDiscount,
} from "../forter-anti-fraud-options-discount.js";

/** Information about the discount applied to this order. */
export type TotalDiscount = ForterAntiFraudOptionsDiscount;

export const totalDiscountSchema: Schema<TotalDiscount> = s.of<TotalDiscount>(
  s.union([s.lazy(() => forterAntiFraudOptionsDiscountSchema)]),
);
