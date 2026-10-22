import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have an `amount` that is greater than or equal to the `amount_gte`
 * value. For best performance, combine it with `created_at_gte` and `created_at_lte`.
 */
export type AmountGte = number;

export const amountGteSchema: Schema<AmountGte> = s.of<AmountGte>(s.union([s.int()]));
