import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceOperationsApi = {
  AmazonForecastResumeResource: "AmazonForecast.ResumeResource",
} as const;
export type XAmzTargetAmazonForecastServiceOperationsApi =
  | (typeof XAmzTargetAmazonForecastServiceOperationsApi)[keyof typeof XAmzTargetAmazonForecastServiceOperationsApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceOperationsApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceOperationsApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceOperationsApi>(XAmzTargetAmazonForecastServiceOperationsApi);
