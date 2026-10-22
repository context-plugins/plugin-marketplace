import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the value (e.g., integer, string, boolean, etc.) */
export const Type5 = {
  Unknown: "UNKNOWN",
  Integer: "INTEGER",
  String: "STRING",
  Boolean: "BOOLEAN",
} as const;
export type Type5 = (typeof Type5)[keyof typeof Type5] | (string & {});

export const type5Schema: EnumSchema<Type5> = s.enumOf<Type5>(Type5);
