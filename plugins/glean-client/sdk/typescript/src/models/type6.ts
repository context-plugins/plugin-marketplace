import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Parameter type (string, number, boolean, object, array) */
export const Type6 = {
  String: "string",
  Number: "number",
  Boolean: "boolean",
  Object: "object",
  Array: "array",
} as const;
export type Type6 = (typeof Type6)[keyof typeof Type6] | (string & {});

export const type6Schema: EnumSchema<Type6> = s.enumOf<Type6>(Type6);
