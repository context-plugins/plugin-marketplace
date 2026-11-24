import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServiceExplainabilityApi = {
  AmazonForecastListExplainabilities: "AmazonForecast.ListExplainabilities",
} as const;
export type XAmzTarget3AmazonForecastServiceExplainabilityApi =
  | (typeof XAmzTarget3AmazonForecastServiceExplainabilityApi)[keyof typeof XAmzTarget3AmazonForecastServiceExplainabilityApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServiceExplainabilityApiSchema: EnumSchema<XAmzTarget3AmazonForecastServiceExplainabilityApi> =
  s.enumOf<XAmzTarget3AmazonForecastServiceExplainabilityApi>(
    XAmzTarget3AmazonForecastServiceExplainabilityApi,
  );
