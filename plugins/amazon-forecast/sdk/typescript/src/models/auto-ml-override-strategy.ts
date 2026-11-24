import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon
 * Web Services Support or your account manager to learn more about access privileges. The AutoML
 * strategy used to train the predictor. Unless LatencyOptimized is specified, the AutoML strategy
 * optimizes predictor accuracy. This parameter is only valid for predictors trained using AutoML.
 */
export const AutoMlOverrideStrategy = {
  LatencyOptimized: "LatencyOptimized",
  AccuracyOptimized: "AccuracyOptimized",
} as const;
export type AutoMlOverrideStrategy =
  | (typeof AutoMlOverrideStrategy)[keyof typeof AutoMlOverrideStrategy]
  | (string & {});

export const autoMlOverrideStrategySchema: EnumSchema<AutoMlOverrideStrategy> =
  s.enumOf<AutoMlOverrideStrategy>(AutoMlOverrideStrategy);
