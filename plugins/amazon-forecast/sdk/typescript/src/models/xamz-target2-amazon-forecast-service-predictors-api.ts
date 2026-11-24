import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServicePredictorsApi = {
  AmazonForecastDescribePredictor: "AmazonForecast.DescribePredictor",
} as const;
export type XAmzTarget2AmazonForecastServicePredictorsApi =
  | (typeof XAmzTarget2AmazonForecastServicePredictorsApi)[keyof typeof XAmzTarget2AmazonForecastServicePredictorsApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServicePredictorsApiSchema: EnumSchema<XAmzTarget2AmazonForecastServicePredictorsApi> =
  s.enumOf<XAmzTarget2AmazonForecastServicePredictorsApi>(XAmzTarget2AmazonForecastServicePredictorsApi);
