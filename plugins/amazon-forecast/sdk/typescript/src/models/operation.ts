import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The operation that is applied to the provided attribute. Operations include: ADD - adds Value to
 * all rows of AttributeName. SUBTRACT - subtracts Value from all rows of AttributeName. MULTIPLY -
 * multiplies all rows of AttributeName by Value. DIVIDE - divides all rows of AttributeName by
 * Value.
 */
export const Operation = {
  Add: "ADD",
  Subtract: "SUBTRACT",
  Multiply: "MULTIPLY",
  Divide: "DIVIDE",
} as const;
export type Operation = (typeof Operation)[keyof typeof Operation] | (string & {});

export const operationSchema: EnumSchema<Operation> = s.enumOf<Operation>(Operation);
