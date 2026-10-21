import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The price of a single item excluding VAT.
 *
 * For example: `{"currency":"EUR", "value":"89.00"}` if the box of LEGO costs €89.00 each.
 *
 * The unit price can be zero in case of free items.
 */
export type Amount31 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount31Schema: Schema<Amount31> = s.object<Amount31>({
  currency: s.string(),
  value: s.string(),
});
