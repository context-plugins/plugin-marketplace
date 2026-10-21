import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { paymentMethodBin2Schema, type PaymentMethodBin2 } from "./payment-method-bin2.js";

/**
 * Filters the results to only include transactions that used the specified payment method bin. The
 * payment method bin is the first 6 digits of the card number. This parameter also accepts `null`
 * to include transactions that have a null for this field.
 */
export type PaymentMethodBin1 = PaymentMethodBin2[];

export const paymentMethodBin1Schema: Schema<PaymentMethodBin1> = s.of<PaymentMethodBin1>(
  s.union([s.array(s.lazy(() => paymentMethodBin2Schema))]),
);
