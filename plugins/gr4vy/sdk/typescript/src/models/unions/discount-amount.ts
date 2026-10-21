import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The amount discounted for this item represented as a monetary amount in the smallest currency
 * unit for the given currency, for example `1299` USD cents represents `$12.99`.
 */
export type DiscountAmount = number;

export const discountAmountSchema: Schema<DiscountAmount> = s.of<DiscountAmount>(s.union([s.int()]));
