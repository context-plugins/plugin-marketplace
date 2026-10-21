import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount to be transferred, e.g. `{"currency":"EUR", "value":"1000.00"}` if you would like to
 * transfer €1000.00.
 */
export type Amount37 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount37Schema: Schema<Amount37> = s.object<Amount37>({
  currency: s.string(),
  value: s.string(),
});
