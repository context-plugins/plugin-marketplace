import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The masked password value. */
export const Password1 = {
  U002AU002AU002AU002AU002AU002AU002AU002A: "********",
} as const;
export type Password1 = (typeof Password1)[keyof typeof Password1] | (string & {});

export const password1Schema: EnumSchema<Password1> = s.enumOf<Password1>(Password1);
