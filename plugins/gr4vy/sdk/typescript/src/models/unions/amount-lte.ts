import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have an `amount` that is less than or equal to the `amount_lte`
 * value. For best performance, combine it with `created_at_gte` and `created_at_lte`.
 */
export type AmountLte = number;

export const amountLteSchema: Schema<AmountLte> = s.of<AmountLte>(s.union([s.int()]));
