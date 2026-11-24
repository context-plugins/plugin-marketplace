import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CountryCode = {
  Us: "US",
} as const;
export type CountryCode = (typeof CountryCode)[keyof typeof CountryCode] | (string & {});

export const countryCodeSchema: EnumSchema<CountryCode> = s.enumOf<CountryCode>(CountryCode);
