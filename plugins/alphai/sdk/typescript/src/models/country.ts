import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Country = {
  Us: "US",
} as const;
export type Country = (typeof Country)[keyof typeof Country] | (string & {});

export const countrySchema: EnumSchema<Country> = s.enumOf<Country>(Country);
