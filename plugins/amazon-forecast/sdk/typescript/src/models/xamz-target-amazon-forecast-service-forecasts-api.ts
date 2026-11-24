import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceForecastsApi = {
  AmazonForecastCreateForecast: "AmazonForecast.CreateForecast",
} as const;
export type XAmzTargetAmazonForecastServiceForecastsApi =
  | (typeof XAmzTargetAmazonForecastServiceForecastsApi)[keyof typeof XAmzTargetAmazonForecastServiceForecastsApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceForecastsApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceForecastsApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceForecastsApi>(XAmzTargetAmazonForecastServiceForecastsApi);
