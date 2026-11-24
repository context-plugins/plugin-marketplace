import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceResourceApi = {
  AmazonForecastStopResource: "AmazonForecast.StopResource",
} as const;
export type XAmzTargetAmazonForecastServiceResourceApi =
  | (typeof XAmzTargetAmazonForecastServiceResourceApi)[keyof typeof XAmzTargetAmazonForecastServiceResourceApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceResourceApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceResourceApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceResourceApi>(XAmzTargetAmazonForecastServiceResourceApi);
