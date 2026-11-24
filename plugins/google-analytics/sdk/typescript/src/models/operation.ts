import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The operation type for this filter. */
export const Operation = {
  OperationUnspecified: "OPERATION_UNSPECIFIED",
  Equal: "EQUAL",
  LessThan: "LESS_THAN",
  LessThanOrEqual: "LESS_THAN_OR_EQUAL",
  GreaterThan: "GREATER_THAN",
  GreaterThanOrEqual: "GREATER_THAN_OR_EQUAL",
} as const;
export type Operation = (typeof Operation)[keyof typeof Operation] | (string & {});

export const operationSchema: EnumSchema<Operation> = s.enumOf<Operation>(Operation);
