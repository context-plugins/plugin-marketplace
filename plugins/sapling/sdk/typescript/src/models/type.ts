import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Value type (default string). "date" is returned as YYYY-MM-DD; "list" is a list of strings. */
export const Type = {
  String: "string",
  Number: "number",
  Integer: "integer",
  Boolean: "boolean",
  Date: "date",
  List: "list",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
