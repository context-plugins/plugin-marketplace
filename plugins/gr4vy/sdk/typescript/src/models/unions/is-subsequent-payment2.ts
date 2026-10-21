import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions where the `is_subsequent_payment` matches the provided value. For best
 * performance, combine it with `created_at_gte` and `created_at_lte`.
 */
export type IsSubsequentPayment2 = boolean;

export const isSubsequentPayment2Schema: Schema<IsSubsequentPayment2> = s.of<IsSubsequentPayment2>(
  s.union([s.boolean()]),
);
