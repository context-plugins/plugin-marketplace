import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of value being stored in the custom field. */
export const CustomFieldType = {
  String: "string",
  Integer: "integer",
  Boolean: "boolean",
  Date: "date",
  Datetime: "datetime",
  List: "list",
  Double: "double",
} as const;
export type CustomFieldType = (typeof CustomFieldType)[keyof typeof CustomFieldType] | (string & {});

export const customFieldTypeSchema: EnumSchema<CustomFieldType> = s.enumOf<CustomFieldType>(CustomFieldType);
