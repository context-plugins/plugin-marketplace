import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Depop marketplace */
export const Country = {
  Us: "us",
  Gb: "gb",
  Au: "au",
  Ca: "ca",
} as const;
export type Country = (typeof Country)[keyof typeof Country] | (string & {});

export const countrySchema: EnumSchema<Country> = s.enumOf<Country>(Country);
