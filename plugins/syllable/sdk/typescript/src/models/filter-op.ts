import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Comparison operator for a single target-filter rule. */
export const FilterOp = {
  In: "in",
  NotIn: "not_in",
  Eq: "eq",
  Neq: "neq",
  Exists: "exists",
  NotExists: "not_exists",
} as const;
export type FilterOp = (typeof FilterOp)[keyof typeof FilterOp] | (string & {});

export const filterOpSchema: EnumSchema<FilterOp> = s.enumOf<FilterOp>(FilterOp);
