import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the state machine (STANDARD or EXPRESS). */
export const Type2 = {
  Standard: "STANDARD",
  Express: "EXPRESS",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
