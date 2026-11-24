import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Pairs with `existingDataPoints`. */
export const ExistingDataPointsCondition = {
  Or: "or",
  And: "and",
} as const;
export type ExistingDataPointsCondition =
  | (typeof ExistingDataPointsCondition)[keyof typeof ExistingDataPointsCondition]
  | (string & {});

export const existingDataPointsConditionSchema: EnumSchema<ExistingDataPointsCondition> =
  s.enumOf<ExistingDataPointsCondition>(ExistingDataPointsCondition);
