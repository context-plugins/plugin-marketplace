import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The register the row came from. Present on every row, so no result is currency-ambiguous. */
export const Country = {
  Us: "US",
  Ca: "CA",
} as const;
export type Country = (typeof Country)[keyof typeof Country] | (string & {});

export const countrySchema: EnumSchema<Country> = s.enumOf<Country>(Country);
