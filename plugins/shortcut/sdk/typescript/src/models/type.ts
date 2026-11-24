import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the Key Result (numeric, percent, or boolean). */
export const Type = {
  Percent: "percent",
  Boolean: "boolean",
  Numeric: "numeric",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
