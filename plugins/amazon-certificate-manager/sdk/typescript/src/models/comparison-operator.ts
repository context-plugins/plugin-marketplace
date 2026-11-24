import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The comparison operator to use. */
export const ComparisonOperator = {
  Contains: "CONTAINS",
  Equals: "EQUALS",
} as const;
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator] | (string & {});

export const comparisonOperatorSchema: EnumSchema<ComparisonOperator> =
  s.enumOf<ComparisonOperator>(ComparisonOperator);
