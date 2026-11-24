import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * ISO 4217 currency code for the payment amount. Currently there are 3 possible currency options -
 * depending on the country where the store is located:
 *   - `AED` - United Arab Emirates Dirham
 *   - `SAR` - Saudi Riyal
 *   - `KWD` - Kuwaiti Dinar
 */
export const Currency = {
  Aed: "AED",
  Sar: "SAR",
  Kwd: "KWD",
} as const;
export type Currency = (typeof Currency)[keyof typeof Currency] | (string & {});

export const currencySchema: EnumSchema<Currency> = s.enumOf<Currency>(Currency);
