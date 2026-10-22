import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount of the payment link. If no amount is provided initially, the customer will be prompted
 * to enter an amount.
 */
export type AmountNullable11 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amountNullable11Schema: Schema<AmountNullable11> = s.object<AmountNullable11>({
  currency: s.string(),
  value: s.string(),
});
