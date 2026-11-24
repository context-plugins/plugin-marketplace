import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The LatencyOptimized AutoML override strategy is only available in private beta. Contact Amazon
 * Web Services Support or your account manager to learn more about access privileges. Used to
 * overide the default AutoML strategy, which is to optimize predictor accuracy. To apply an AutoML
 * strategy that minimizes training time, use LatencyOptimized. This parameter is only valid for
 * predictors trained using AutoML.
 */
export const AutoMlOverrideStrategyAmazonForecastServicePredictorsApi = {
  LatencyOptimized: "LatencyOptimized",
  AccuracyOptimized: "AccuracyOptimized",
} as const;
export type AutoMlOverrideStrategyAmazonForecastServicePredictorsApi =
  | (typeof AutoMlOverrideStrategyAmazonForecastServicePredictorsApi)[keyof typeof AutoMlOverrideStrategyAmazonForecastServicePredictorsApi]
  | (string & {});

export const autoMlOverrideStrategyAmazonForecastServicePredictorsApiSchema: EnumSchema<AutoMlOverrideStrategyAmazonForecastServicePredictorsApi> =
  s.enumOf<AutoMlOverrideStrategyAmazonForecastServicePredictorsApi>(
    AutoMlOverrideStrategyAmazonForecastServicePredictorsApi,
  );
