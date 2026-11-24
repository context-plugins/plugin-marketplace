import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceForecastsApi = {
  AmazonForecastDescribeForecast: "AmazonForecast.DescribeForecast",
} as const;
export type XAmzTarget2AmazonForecastServiceForecastsApi =
  | (typeof XAmzTarget2AmazonForecastServiceForecastsApi)[keyof typeof XAmzTarget2AmazonForecastServiceForecastsApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceForecastsApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceForecastsApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceForecastsApi>(XAmzTarget2AmazonForecastServiceForecastsApi);
