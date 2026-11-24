import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceResourceApi = {
  AmazonForecastUntagResource: "AmazonForecast.UntagResource",
} as const;
export type XAmzTarget2AmazonForecastServiceResourceApi =
  | (typeof XAmzTarget2AmazonForecastServiceResourceApi)[keyof typeof XAmzTarget2AmazonForecastServiceResourceApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceResourceApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceResourceApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceResourceApi>(XAmzTarget2AmazonForecastServiceResourceApi);
