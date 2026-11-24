import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TechnologiesCondition = {
  Or: "or",
  And: "and",
} as const;
export type TechnologiesCondition =
  | (typeof TechnologiesCondition)[keyof typeof TechnologiesCondition]
  | (string & {});

export const technologiesConditionSchema: EnumSchema<TechnologiesCondition> =
  s.enumOf<TechnologiesCondition>(TechnologiesCondition);
