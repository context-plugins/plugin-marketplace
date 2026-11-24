import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServicePredictorsApi = {
  AmazonForecastDeletePredictor: "AmazonForecast.DeletePredictor",
} as const;
export type XAmzTarget1AmazonForecastServicePredictorsApi =
  | (typeof XAmzTarget1AmazonForecastServicePredictorsApi)[keyof typeof XAmzTarget1AmazonForecastServicePredictorsApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServicePredictorsApiSchema: EnumSchema<XAmzTarget1AmazonForecastServicePredictorsApi> =
  s.enumOf<XAmzTarget1AmazonForecastServicePredictorsApi>(XAmzTarget1AmazonForecastServicePredictorsApi);
