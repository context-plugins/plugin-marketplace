import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Comparison operator */
export const Operator = {
  U003D: "=",
  U0021U003D: "!=",
  U003DU007E: "=~",
  U0021U007E: "!~",
} as const;
export type Operator = (typeof Operator)[keyof typeof Operator] | (string & {});

export const operatorSchema: EnumSchema<Operator> = s.enumOf<Operator>(Operator);
