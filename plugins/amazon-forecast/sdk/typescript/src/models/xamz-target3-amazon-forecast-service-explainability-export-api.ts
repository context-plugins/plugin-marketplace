import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServiceExplainabilityExportApi = {
  AmazonForecastListExplainabilityExports: "AmazonForecast.ListExplainabilityExports",
} as const;
export type XAmzTarget3AmazonForecastServiceExplainabilityExportApi =
  | (typeof XAmzTarget3AmazonForecastServiceExplainabilityExportApi)[keyof typeof XAmzTarget3AmazonForecastServiceExplainabilityExportApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServiceExplainabilityExportApiSchema: EnumSchema<XAmzTarget3AmazonForecastServiceExplainabilityExportApi> =
  s.enumOf<XAmzTarget3AmazonForecastServiceExplainabilityExportApi>(
    XAmzTarget3AmazonForecastServiceExplainabilityExportApi,
  );
