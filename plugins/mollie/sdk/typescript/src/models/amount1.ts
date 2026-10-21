import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The final amount that was moved to or from the balance. If the transaction moves funds away from
 * the balance, for example when it concerns a refund, the amount will be negative.
 */
export type Amount1 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount1Schema: Schema<Amount1> = s.object<Amount1>({
  currency: s.string(),
  value: s.string(),
});
