import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that used the specified card type. This
 * parameter also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to
 * include transactions that have a null for this field.
 */
export type PaymentMethodCardType = string[];

export const paymentMethodCardTypeSchema: Schema<PaymentMethodCardType> = s.of<PaymentMethodCardType>(
  s.union([s.array(s.string())]),
);
