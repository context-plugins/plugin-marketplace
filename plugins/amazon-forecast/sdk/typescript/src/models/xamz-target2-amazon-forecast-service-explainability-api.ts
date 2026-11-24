import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceExplainabilityApi = {
  AmazonForecastDescribeExplainability: "AmazonForecast.DescribeExplainability",
} as const;
export type XAmzTarget2AmazonForecastServiceExplainabilityApi =
  | (typeof XAmzTarget2AmazonForecastServiceExplainabilityApi)[keyof typeof XAmzTarget2AmazonForecastServiceExplainabilityApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceExplainabilityApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceExplainabilityApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceExplainabilityApi>(
    XAmzTarget2AmazonForecastServiceExplainabilityApi,
  );
