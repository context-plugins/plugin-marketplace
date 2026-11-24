import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Comparison operator. */
export const Operator1 = {
  Equals: "EQUALS",
  NotEquals: "NOT_EQUALS",
  Like: "LIKE",
  StartsWith: "STARTS_WITH",
} as const;
export type Operator1 = (typeof Operator1)[keyof typeof Operator1] | (string & {});

export const operator1Schema: EnumSchema<Operator1> = s.enumOf<Operator1>(Operator1);
