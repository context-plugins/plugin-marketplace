import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Kind of governed population. */
export const Type2 = {
  Organization: "ORGANIZATION",
  DefaultUser: "DEFAULT_USER",
  DefaultAgent: "DEFAULT_AGENT",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
