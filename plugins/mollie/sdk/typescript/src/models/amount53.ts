import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The amount of the transaction, e.g. `{"currency":"EUR", "value":"100.00"}`. */
export type Amount53 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount53Schema: Schema<Amount53> = s.object<Amount53>({
  currency: s.string(),
  value: s.string(),
});
