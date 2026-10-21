import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions where the `merchant_initiated` matches the provided value. For best
 * performance, combine it with `created_at_gte` and `created_at_lte`.
 */
export type MerchantInitiated2 = boolean;

export const merchantInitiated2Schema: Schema<MerchantInitiated2> = s.of<MerchantInitiated2>(
  s.union([s.boolean()]),
);
