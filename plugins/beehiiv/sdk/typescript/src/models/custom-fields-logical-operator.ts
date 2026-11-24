import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomFieldsLogicalOperator = {
  And: "and",
  Or: "or",
} as const;
export type CustomFieldsLogicalOperator =
  | (typeof CustomFieldsLogicalOperator)[keyof typeof CustomFieldsLogicalOperator]
  | (string & {});

export const customFieldsLogicalOperatorSchema: EnumSchema<CustomFieldsLogicalOperator> =
  s.enumOf<CustomFieldsLogicalOperator>(CustomFieldsLogicalOperator);
