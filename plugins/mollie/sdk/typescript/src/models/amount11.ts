import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The amount of value-added tax on the line. The `totalAmount` field includes VAT, so the
 * `vatAmount` can be calculated with the formula `totalAmount × (vatRate / (100 + vatRate))`.
 *
 * Any deviations from this will result in an error.
 *
 * For example, for a `totalAmount` of SEK 100.00 with a 25.00% VAT rate, we expect a VAT amount of
 * `SEK 100.00 × (25 / 125) = SEK 20.00`.
 */
export type Amount11 = {
  /** A three-character ISO 4217 currency code. */
  currency: string;
  /** A string containing an exact monetary amount in the given currency. */
  value: string;
};

export const amount11Schema: Schema<Amount11> = s.object<Amount11>({
  currency: s.string(),
  value: s.string(),
});
