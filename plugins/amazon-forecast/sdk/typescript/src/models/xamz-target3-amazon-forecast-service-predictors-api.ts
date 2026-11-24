import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServicePredictorsApi = {
  AmazonForecastListPredictors: "AmazonForecast.ListPredictors",
} as const;
export type XAmzTarget3AmazonForecastServicePredictorsApi =
  | (typeof XAmzTarget3AmazonForecastServicePredictorsApi)[keyof typeof XAmzTarget3AmazonForecastServicePredictorsApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServicePredictorsApiSchema: EnumSchema<XAmzTarget3AmazonForecastServicePredictorsApi> =
  s.enumOf<XAmzTarget3AmazonForecastServicePredictorsApi>(XAmzTarget3AmazonForecastServicePredictorsApi);
