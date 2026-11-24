import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Operator type if this object represents an operator, and not a filter */
export const Operator = {
  And: "and",
  Or: "or",
} as const;
export type Operator = (typeof Operator)[keyof typeof Operator] | (string & {});

export const operatorSchema: EnumSchema<Operator> = s.enumOf<Operator>(Operator);
