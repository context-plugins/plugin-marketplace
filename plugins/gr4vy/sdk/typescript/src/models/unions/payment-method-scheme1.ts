import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentMethodScheme2Schema, type PaymentMethodScheme2 } from "./payment-method-scheme2.js";

/**
 * Filters the results to only include transactions that were processed with the specified payment
 * method scheme. This parameter also accepts `null` to include transactions that have a null for
 * this field.
 */
export type PaymentMethodScheme1 = PaymentMethodScheme2[];

export const paymentMethodScheme1Schema: Schema<PaymentMethodScheme1> = s.of<PaymentMethodScheme1>(
  s.union([s.array(s.lazy(() => paymentMethodScheme2Schema))]),
);
