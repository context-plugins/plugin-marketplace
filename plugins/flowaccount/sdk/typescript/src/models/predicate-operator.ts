import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 0 = Or 1 = And */
export const PredicateOperator = {
  _0: 0,
  _1: 1,
} as const;
export type PredicateOperator = (typeof PredicateOperator)[keyof typeof PredicateOperator] | (number & {});

export const predicateOperatorSchema: EnumSchema<PredicateOperator> =
  s.enumOf<PredicateOperator>(PredicateOperator);
