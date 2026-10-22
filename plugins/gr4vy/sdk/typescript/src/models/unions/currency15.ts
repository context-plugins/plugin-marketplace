import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have matching `currency` values. The `currency` values provided
 * must be formatted as 3-letter ISO currency code. For best performance, combine it with
 * `created_at_gte` and `created_at_lte`.
 */
export type Currency15 = string[];

export const currency15Schema: Schema<Currency15> = s.of<Currency15>(s.union([s.array(s.string())]));
