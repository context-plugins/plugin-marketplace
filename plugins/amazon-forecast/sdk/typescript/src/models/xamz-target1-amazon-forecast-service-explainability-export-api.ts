import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceExplainabilityExportApi = {
  AmazonForecastDeleteExplainabilityExport: "AmazonForecast.DeleteExplainabilityExport",
} as const;
export type XAmzTarget1AmazonForecastServiceExplainabilityExportApi =
  | (typeof XAmzTarget1AmazonForecastServiceExplainabilityExportApi)[keyof typeof XAmzTarget1AmazonForecastServiceExplainabilityExportApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceExplainabilityExportApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceExplainabilityExportApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceExplainabilityExportApi>(
    XAmzTarget1AmazonForecastServiceExplainabilityExportApi,
  );
