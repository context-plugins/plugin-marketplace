import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceResourceApi = {
  AmazonForecastTagResource: "AmazonForecast.TagResource",
} as const;
export type XAmzTarget1AmazonForecastServiceResourceApi =
  | (typeof XAmzTarget1AmazonForecastServiceResourceApi)[keyof typeof XAmzTarget1AmazonForecastServiceResourceApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceResourceApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceResourceApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceResourceApi>(XAmzTarget1AmazonForecastServiceResourceApi);
