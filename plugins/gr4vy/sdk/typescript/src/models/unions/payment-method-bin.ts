import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that used the specified payment method bin. The
 * payment method bin is the first 6 digits of the card number. This parameter also accepts [the
 * null character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a
 * null for this field.
 */
export type PaymentMethodBin = string[];

export const paymentMethodBinSchema: Schema<PaymentMethodBin> = s.of<PaymentMethodBin>(
  s.union([s.array(s.string())]),
);
