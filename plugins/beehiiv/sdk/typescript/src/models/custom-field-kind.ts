import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the custom field. */
export const CustomFieldKind = {
  String: "string",
  Integer: "integer",
  Number: "number",
  Boolean: "boolean",
  Date: "date",
  Datetime: "datetime",
  List: "list",
} as const;
export type CustomFieldKind = (typeof CustomFieldKind)[keyof typeof CustomFieldKind] | (string & {});

export const customFieldKindSchema: EnumSchema<CustomFieldKind> = s.enumOf<CustomFieldKind>(CustomFieldKind);
