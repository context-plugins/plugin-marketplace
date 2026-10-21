import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount that was to be moved to or from the balance, excluding deductions. If the transaction
 * moves funds away from the balance, for example when it concerns a refund, the amount will be
 * negative.
 */
export type Amount2 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount2Schema: Schema<Amount2> = s.object<Amount2>({
  currency: s.string(),
  value: s.string(),
});
