import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceExplainabilityApi = {
  AmazonForecastDeleteExplainability: "AmazonForecast.DeleteExplainability",
} as const;
export type XAmzTarget1AmazonForecastServiceExplainabilityApi =
  | (typeof XAmzTarget1AmazonForecastServiceExplainabilityApi)[keyof typeof XAmzTarget1AmazonForecastServiceExplainabilityApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceExplainabilityApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceExplainabilityApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceExplainabilityApi>(
    XAmzTarget1AmazonForecastServiceExplainabilityApi,
  );
