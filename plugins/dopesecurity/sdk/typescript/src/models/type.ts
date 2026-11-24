import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Entity type (returned on read APIs) */
export const Type = {
  Users: "users",
  Groups: "groups",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
