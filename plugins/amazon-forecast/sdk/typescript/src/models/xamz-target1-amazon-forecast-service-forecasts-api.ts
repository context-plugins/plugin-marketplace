import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceForecastsApi = {
  AmazonForecastDeleteForecast: "AmazonForecast.DeleteForecast",
} as const;
export type XAmzTarget1AmazonForecastServiceForecastsApi =
  | (typeof XAmzTarget1AmazonForecastServiceForecastsApi)[keyof typeof XAmzTarget1AmazonForecastServiceForecastsApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceForecastsApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceForecastsApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceForecastsApi>(XAmzTarget1AmazonForecastServiceForecastsApi);
