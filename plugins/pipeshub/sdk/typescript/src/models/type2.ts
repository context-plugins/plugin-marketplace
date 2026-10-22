import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The field's `filterType` from the registry schema */
export const Type2 = {
  String: "string",
  Boolean: "boolean",
  Datetime: "datetime",
  List: "list",
  Number: "number",
  Multiselect: "multiselect",
  Select: "select",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
