import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FieldType = {
  Text: "TEXT",
  Password: "PASSWORD",
  Url: "URL",
  Select: "SELECT",
} as const;
export type FieldType = (typeof FieldType)[keyof typeof FieldType] | (string & {});

export const fieldTypeSchema: EnumSchema<FieldType> = s.enumOf<FieldType>(FieldType);
