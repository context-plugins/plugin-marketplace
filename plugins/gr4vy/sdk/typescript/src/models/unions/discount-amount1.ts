import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes a discount amount to be applied to the transaction when using Braintree. */
export type DiscountAmount1 = number;

export const discountAmount1Schema: Schema<DiscountAmount1> = s.of<DiscountAmount1>(s.union([s.int()]));
