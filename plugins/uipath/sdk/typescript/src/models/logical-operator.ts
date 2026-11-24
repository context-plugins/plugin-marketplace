import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Logical operator combining the conditions in this group */
export const LogicalOperator = {
  And: "AND",
  Or: "OR",
} as const;
export type LogicalOperator = (typeof LogicalOperator)[keyof typeof LogicalOperator] | (string & {});

export const logicalOperatorSchema: EnumSchema<LogicalOperator> = s.enumOf<LogicalOperator>(LogicalOperator);
