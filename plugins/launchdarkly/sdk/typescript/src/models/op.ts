import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The operator to apply to the given attribute */
export const Op = {
  In: "in",
  EndsWith: "endsWith",
  StartsWith: "startsWith",
  Matches: "matches",
  Contains: "contains",
  LessThan: "lessThan",
  LessThanOrEqual: "lessThanOrEqual",
  GreaterThan: "greaterThan",
  GreaterThanOrEqual: "greaterThanOrEqual",
  Before: "before",
  After: "after",
  SegmentMatch: "segmentMatch",
  SemVerEqual: "semVerEqual",
  SemVerLessThan: "semVerLessThan",
  SemVerGreaterThan: "semVerGreaterThan",
} as const;
export type Op = (typeof Op)[keyof typeof Op] | (string & {});

export const opSchema: EnumSchema<Op> = s.enumOf<Op>(Op);
