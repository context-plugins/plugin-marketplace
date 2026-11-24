import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceTagsApi = {
  AmazonForecastListTagsForResource: "AmazonForecast.ListTagsForResource",
} as const;
export type XAmzTargetAmazonForecastServiceTagsApi =
  | (typeof XAmzTargetAmazonForecastServiceTagsApi)[keyof typeof XAmzTargetAmazonForecastServiceTagsApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceTagsApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceTagsApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceTagsApi>(XAmzTargetAmazonForecastServiceTagsApi);
