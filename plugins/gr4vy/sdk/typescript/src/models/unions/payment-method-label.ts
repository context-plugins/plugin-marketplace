import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters for transactions that have a payment method with a label that matches exactly with the
 * provided value.
 */
export type PaymentMethodLabel = string;

export const paymentMethodLabelSchema: Schema<PaymentMethodLabel> = s.of<PaymentMethodLabel>(
  s.union([s.string()]),
);
