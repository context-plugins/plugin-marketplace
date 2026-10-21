import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The masked password value for basic auth. */
export const Password = {
  U002AU002AU002AU002AU002AU002AU002AU002A: "********",
} as const;
export type Password = (typeof Password)[keyof typeof Password] | (string & {});

export const passwordSchema: EnumSchema<Password> = s.enumOf<Password>(Password);
