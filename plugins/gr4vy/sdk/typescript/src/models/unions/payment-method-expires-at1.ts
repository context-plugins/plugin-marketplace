import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Defines a custom expiration time (unix time) after which Oxxo payment requests are cancelled */
export type PaymentMethodExpiresAt1 = number;

export const paymentMethodExpiresAt1Schema: Schema<PaymentMethodExpiresAt1> = s.of<PaymentMethodExpiresAt1>(
  s.union([s.int()]),
);
