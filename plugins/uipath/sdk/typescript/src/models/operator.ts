import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Comparison operator for the filter condition */
export const Operator = {
  Equals: "equals",
  NotEquals: "notEquals",
  LessThan: "lessThan",
  LessThanOrEquals: "lessThanOrEquals",
  GreaterThan: "greaterThan",
  GreaterThanOrEquals: "greaterThanOrEquals",
  Contains: "contains",
  StartsWith: "startsWith",
  EndsWith: "endsWith",
  IsNull: "isNull",
  IsNotNull: "isNotNull",
} as const;
export type Operator = (typeof Operator)[keyof typeof Operator] | (string & {});

export const operatorSchema: EnumSchema<Operator> = s.enumOf<Operator>(Operator);
