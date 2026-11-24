import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceExplainabilityApi = {
  AmazonForecastCreateExplainability: "AmazonForecast.CreateExplainability",
} as const;
export type XAmzTargetAmazonForecastServiceExplainabilityApi =
  | (typeof XAmzTargetAmazonForecastServiceExplainabilityApi)[keyof typeof XAmzTargetAmazonForecastServiceExplainabilityApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceExplainabilityApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceExplainabilityApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceExplainabilityApi>(
    XAmzTargetAmazonForecastServiceExplainabilityApi,
  );
