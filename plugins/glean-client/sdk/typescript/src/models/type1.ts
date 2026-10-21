import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type1 = {
  Primary: "PRIMARY",
  Secondary: "SECONDARY",
  Oncall: "ONCALL",
  Other: "OTHER",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
