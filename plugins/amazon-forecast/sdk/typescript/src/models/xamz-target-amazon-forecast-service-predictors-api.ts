import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServicePredictorsApi = {
  AmazonForecastCreatePredictor: "AmazonForecast.CreatePredictor",
} as const;
export type XAmzTargetAmazonForecastServicePredictorsApi =
  | (typeof XAmzTargetAmazonForecastServicePredictorsApi)[keyof typeof XAmzTargetAmazonForecastServicePredictorsApi]
  | (string & {});

export const xAmzTargetAmazonForecastServicePredictorsApiSchema: EnumSchema<XAmzTargetAmazonForecastServicePredictorsApi> =
  s.enumOf<XAmzTargetAmazonForecastServicePredictorsApi>(XAmzTargetAmazonForecastServicePredictorsApi);
