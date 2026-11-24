import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Recommended over `intentTopicsCondition`. `any`/`all` are aliases for `or`/`and`.
 * `intentTopicsCondition` is not deprecated and remains accepted.
 */
export const IntentTopicsOperator = {
  Or: "or",
  And: "and",
  Any: "any",
  All: "all",
} as const;
export type IntentTopicsOperator =
  | (typeof IntentTopicsOperator)[keyof typeof IntentTopicsOperator]
  | (string & {});

export const intentTopicsOperatorSchema: EnumSchema<IntentTopicsOperator> =
  s.enumOf<IntentTopicsOperator>(IntentTopicsOperator);
