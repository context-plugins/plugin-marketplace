import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Organization or inherited default policy. */
export const Type6 = {
  Organization: "ORGANIZATION",
  DefaultUser: "DEFAULT_USER",
  DefaultAgent: "DEFAULT_AGENT",
} as const;
export type Type6 = (typeof Type6)[keyof typeof Type6] | (string & {});

export const type6Schema: EnumSchema<Type6> = s.enumOf<Type6>(Type6);
