import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Data type of the asset value */
export const ValueType = {
  Text: "Text",
  Integer: "Integer",
  Bool: "Bool",
  Credential: "Credential",
  WindowsCredential: "WindowsCredential",
  KeyValueList: "KeyValueList",
} as const;
export type ValueType = (typeof ValueType)[keyof typeof ValueType] | (string & {});

export const valueTypeSchema: EnumSchema<ValueType> = s.enumOf<ValueType>(ValueType);
