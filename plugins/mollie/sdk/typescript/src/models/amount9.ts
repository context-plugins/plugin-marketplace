import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Any line-specific discounts, as a positive amount. Not relevant if the line itself is already a
 * discount type.
 */
export type Amount9 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount9Schema: Schema<Amount9> = s.object<Amount9>({
  currency: s.string(),
  value: s.string(),
});
