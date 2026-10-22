import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The price of a single item including VAT.
 *
 * For example: `{"currency":"EUR", "value":"89.00"}` if the box of LEGO costs €89.00 each.
 *
 * For types `discount`, `store_credit`, and `gift_card`, the unit price must be negative.
 *
 * The unit price can be zero in case of free items.
 */
export type Amount8 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount8Schema: Schema<Amount8> = s.object<Amount8>({
  currency: s.string(),
  value: s.string(),
});
