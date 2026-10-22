import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions where the `payment_method_scheme` matches one of the provided values.
 * For best performance, combine it with `created_at_gte` and `created_at_lte`.
 */
export type PaymentMethodScheme3 = string[];

export const paymentMethodScheme3Schema: Schema<PaymentMethodScheme3> = s.of<PaymentMethodScheme3>(
  s.union([s.array(s.string())]),
);
