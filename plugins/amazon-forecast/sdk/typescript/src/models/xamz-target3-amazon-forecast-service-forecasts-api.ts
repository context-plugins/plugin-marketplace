import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServiceForecastsApi = {
  AmazonForecastListForecasts: "AmazonForecast.ListForecasts",
} as const;
export type XAmzTarget3AmazonForecastServiceForecastsApi =
  | (typeof XAmzTarget3AmazonForecastServiceForecastsApi)[keyof typeof XAmzTarget3AmazonForecastServiceForecastsApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServiceForecastsApiSchema: EnumSchema<XAmzTarget3AmazonForecastServiceForecastsApi> =
  s.enumOf<XAmzTarget3AmazonForecastServiceForecastsApi>(XAmzTarget3AmazonForecastServiceForecastsApi);
