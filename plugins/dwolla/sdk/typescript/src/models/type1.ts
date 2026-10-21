import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The kind of government identification document provided. */
export const Type1 = {
  Passport: "passport",
  License: "license",
  IdCard: "idCard",
  TaxId: "taxId",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
