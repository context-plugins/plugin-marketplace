import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceExplainabilityExportApi = {
  AmazonForecastCreateExplainabilityExport: "AmazonForecast.CreateExplainabilityExport",
} as const;
export type XAmzTargetAmazonForecastServiceExplainabilityExportApi =
  | (typeof XAmzTargetAmazonForecastServiceExplainabilityExportApi)[keyof typeof XAmzTargetAmazonForecastServiceExplainabilityExportApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceExplainabilityExportApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceExplainabilityExportApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceExplainabilityExportApi>(
    XAmzTargetAmazonForecastServiceExplainabilityExportApi,
  );
