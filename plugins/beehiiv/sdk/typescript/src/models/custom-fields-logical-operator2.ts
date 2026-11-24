import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The logical operator used to combine multiple custom field filters. Defaults to `and` if not
 * specified.
 */
export const CustomFieldsLogicalOperator2 = {
  And: "and",
  Or: "or",
} as const;
export type CustomFieldsLogicalOperator2 =
  | (typeof CustomFieldsLogicalOperator2)[keyof typeof CustomFieldsLogicalOperator2]
  | (string & {});

export const customFieldsLogicalOperator2Schema: EnumSchema<CustomFieldsLogicalOperator2> =
  s.enumOf<CustomFieldsLogicalOperator2>(CustomFieldsLogicalOperator2);
