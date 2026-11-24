import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type = {
  String: "string",
  Number: "number",
  Date: "date",
  Datetime: "datetime",
  Enumeration: "enumeration",
  Bool: "bool",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
