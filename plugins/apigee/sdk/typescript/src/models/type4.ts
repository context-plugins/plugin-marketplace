import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Immutable. The type of data this data collector will collect. */
export const Type4 = {
  TypeUnspecified: "TYPE_UNSPECIFIED",
  Integer: "INTEGER",
  Float: "FLOAT",
  String: "STRING",
  Boolean: "BOOLEAN",
  Datetime: "DATETIME",
} as const;
export type Type4 = (typeof Type4)[keyof typeof Type4] | (string & {});

export const type4Schema: EnumSchema<Type4> = s.enumOf<Type4>(Type4);
