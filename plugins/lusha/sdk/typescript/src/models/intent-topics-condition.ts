import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IntentTopicsCondition = {
  Or: "or",
  And: "and",
} as const;
export type IntentTopicsCondition =
  | (typeof IntentTopicsCondition)[keyof typeof IntentTopicsCondition]
  | (string & {});

export const intentTopicsConditionSchema: EnumSchema<IntentTopicsCondition> =
  s.enumOf<IntentTopicsCondition>(IntentTopicsCondition);
