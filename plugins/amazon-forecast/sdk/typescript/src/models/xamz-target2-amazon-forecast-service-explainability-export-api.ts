import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceExplainabilityExportApi = {
  AmazonForecastDescribeExplainabilityExport: "AmazonForecast.DescribeExplainabilityExport",
} as const;
export type XAmzTarget2AmazonForecastServiceExplainabilityExportApi =
  | (typeof XAmzTarget2AmazonForecastServiceExplainabilityExportApi)[keyof typeof XAmzTarget2AmazonForecastServiceExplainabilityExportApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceExplainabilityExportApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceExplainabilityExportApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceExplainabilityExportApi>(
    XAmzTarget2AmazonForecastServiceExplainabilityExportApi,
  );
