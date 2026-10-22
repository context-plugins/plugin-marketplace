import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Comparison operator. */
export const FilterOp1 = {
  In: "in",
  NotIn: "not_in",
  Eq: "eq",
  Neq: "neq",
  Exists: "exists",
  NotExists: "not_exists",
} as const;
export type FilterOp1 = (typeof FilterOp1)[keyof typeof FilterOp1] | (string & {});

export const filterOp1Schema: EnumSchema<FilterOp1> = s.enumOf<FilterOp1>(FilterOp1);
