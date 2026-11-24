import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of Variable. Must be one of [String | Boolean | Number | JSON] */
export const Type4 = {
  String: "String",
  Boolean: "Boolean",
  Number: "Number",
  Json: "JSON",
} as const;
export type Type4 = (typeof Type4)[keyof typeof Type4] | (string & {});

export const type4Schema: EnumSchema<Type4> = s.enumOf<Type4>(Type4);
