import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceWhatIfForecastExportApi = {
  AmazonForecastCreateWhatIfForecastExport: "AmazonForecast.CreateWhatIfForecastExport",
} as const;
export type XAmzTargetAmazonForecastServiceWhatIfForecastExportApi =
  | (typeof XAmzTargetAmazonForecastServiceWhatIfForecastExportApi)[keyof typeof XAmzTargetAmazonForecastServiceWhatIfForecastExportApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceWhatIfForecastExportApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceWhatIfForecastExportApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceWhatIfForecastExportApi>(
    XAmzTargetAmazonForecastServiceWhatIfForecastExportApi,
  );
