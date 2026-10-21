import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Kind of client-scoped population. */
export const Type3 = {
  Organization: "ORGANIZATION",
  DefaultUser: "DEFAULT_USER",
  User: "USER",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
