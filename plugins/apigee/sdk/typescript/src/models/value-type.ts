import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Type of the parameter: string, int, bool etc. */
export const ValueType = {
  ValueTypeUnspecified: "VALUE_TYPE_UNSPECIFIED",
  String: "STRING",
  Int: "INT",
  Bool: "BOOL",
  Secret: "SECRET",
  Enum: "ENUM",
  MultiSelect: "MULTI_SELECT",
  MultiString: "MULTI_STRING",
  MultiInt: "MULTI_INT",
} as const;
export type ValueType = (typeof ValueType)[keyof typeof ValueType] | (string & {});

export const valueTypeSchema: EnumSchema<ValueType> = s.enumOf<ValueType>(ValueType);
