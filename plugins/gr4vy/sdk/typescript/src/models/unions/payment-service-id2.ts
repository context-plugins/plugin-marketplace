import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that were processed with the specified payment
 * service ID. This parameter also accepts [the null
 * character](https://en.wikipedia.org/wiki/Null_character) to include transactions that have a null
 * for this field.
 */
export type PaymentServiceId2 = string[];

export const paymentServiceId2Schema: Schema<PaymentServiceId2> = s.of<PaymentServiceId2>(
  s.union([s.array(s.string())]),
);
