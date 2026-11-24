import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Standard 3 character currency codes as per ISO-4217. */
export const Currency = {
  Aud: "AUD",
  Usd: "USD",
  Gbp: "GBP",
} as const;
export type Currency = (typeof Currency)[keyof typeof Currency] | (string & {});

export const currencySchema: EnumSchema<Currency> = s.enumOf<Currency>(Currency);
