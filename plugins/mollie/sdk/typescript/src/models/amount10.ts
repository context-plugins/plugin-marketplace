import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The total amount of the line, including VAT and discounts.
 *
 * Should match the following formula: `(unitPrice × quantity) - discountAmount`.
 *
 * The sum of all `totalAmount` values of all order lines should be equal to the full payment
 * amount.
 */
export type Amount10 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount10Schema: Schema<Amount10> = s.object<Amount10>({
  currency: s.string(),
  value: s.string(),
});
