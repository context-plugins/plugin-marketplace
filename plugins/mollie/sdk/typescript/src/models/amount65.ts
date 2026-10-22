import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The minimum amount of the payment link. This property is only allowed when there is no amount
 * provided. The customer will be prompted to enter a value greater than or equal to the minimum
 * amount.
 */
export type Amount65 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount65Schema: Schema<Amount65> = s.object<Amount65>({
  currency: s.string(),
  value: s.string(),
});
