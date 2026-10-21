import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filter for transactions that have a card with a BIN that matches exactly with the provided value.
 */
export type PaymentMethodBin3 = string;

export const paymentMethodBin3Schema: Schema<PaymentMethodBin3> = s.of<PaymentMethodBin3>(
  s.union([s.string()]),
);
