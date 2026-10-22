import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have an `amount` that is equal to the provided `amount_eq` value.
 * For best performance, combine it with `created_at_gte` and `created_at_lte`.
 */
export type AmountEq = number;

export const amountEqSchema: Schema<AmountEq> = s.of<AmountEq>(s.union([s.int()]));
