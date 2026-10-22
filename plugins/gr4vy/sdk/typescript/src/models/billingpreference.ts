import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Billingpreference = {
  All: "ALL",
  ZipCountry: "ZIP_COUNTRY",
  None: "NONE",
} as const;
export type Billingpreference = (typeof Billingpreference)[keyof typeof Billingpreference] | (string & {});

export const billingpreferenceSchema: EnumSchema<Billingpreference> =
  s.enumOf<Billingpreference>(Billingpreference);
