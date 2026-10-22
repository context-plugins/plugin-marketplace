import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only include transactions that were processed with a card issued in the
 * specified country. The country code should be in the ISO 3166-1 two letter format. This parameter
 * also accepts [the null character](https://en.wikipedia.org/wiki/Null_character) to include
 * transactions that have a null for this field.
 */
export type PaymentMethodCountry = string[];

export const paymentMethodCountrySchema: Schema<PaymentMethodCountry> = s.of<PaymentMethodCountry>(
  s.union([s.array(s.string())]),
);
