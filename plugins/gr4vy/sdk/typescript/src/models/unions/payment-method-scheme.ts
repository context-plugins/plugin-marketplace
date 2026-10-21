import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that were processed with the specified payment
 * method scheme. This parameter also accepts [the null
 * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null
 * for this field.
 */
export type PaymentMethodScheme = string[];

export const paymentMethodSchemeSchema: Schema<PaymentMethodScheme> = s.of<PaymentMethodScheme>(
  s.union([s.array(s.string())]),
);
