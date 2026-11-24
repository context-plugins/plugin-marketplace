import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Determines whether a Standard or Express state machine is created. The default is STANDARD. You
 * cannot update the type of a state machine once it has been created.
 */
export const Type1 = {
  Standard: "STANDARD",
  Express: "EXPRESS",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
