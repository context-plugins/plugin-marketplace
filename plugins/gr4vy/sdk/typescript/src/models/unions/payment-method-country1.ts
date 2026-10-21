import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have a payment method with a country that matches with the provided
 * value. For best performance, combine it with `created_at_gte` and `created_at_lte`.
 */
export type PaymentMethodCountry1 = string;

export const paymentMethodCountry1Schema: Schema<PaymentMethodCountry1> = s.of<PaymentMethodCountry1>(
  s.union([s.string()]),
);
