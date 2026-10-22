import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Parser or formatter type to use. */
export const Type5 = {
  Delim: "delim",
} as const;
export type Type5 = (typeof Type5)[keyof typeof Type5] | (string & {});

export const type5Schema: EnumSchema<Type5> = s.enumOf<Type5>(Type5);
