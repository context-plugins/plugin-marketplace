import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of identity document uploaded */
export const Type = {
  Passport: "passport",
  License: "license",
  IdCard: "idCard",
  Other: "other",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
