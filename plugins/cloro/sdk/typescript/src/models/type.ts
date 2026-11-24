import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of question result */
export const Type = {
  Aioverview: "AIOVERVIEW",
  Link: "LINK",
  Unknown: "UNKNOWN",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
