import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data type accepted by the data collector. */
export const Type5 = {
  TypeUnspecified: "TYPE_UNSPECIFIED",
  Integer: "INTEGER",
  Float: "FLOAT",
  String: "STRING",
  Boolean: "BOOLEAN",
  Datetime: "DATETIME",
} as const;
export type Type5 = (typeof Type5)[keyof typeof Type5] | (string & {});

export const type5Schema: EnumSchema<Type5> = s.enumOf<Type5>(Type5);
