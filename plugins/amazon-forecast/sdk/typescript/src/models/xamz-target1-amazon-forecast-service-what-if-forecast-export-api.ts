import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi = {
  AmazonForecastDeleteWhatIfForecastExport: "AmazonForecast.DeleteWhatIfForecastExport",
} as const;
export type XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi =
  | (typeof XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi)[keyof typeof XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceWhatIfForecastExportApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi>(
    XAmzTarget1AmazonForecastServiceWhatIfForecastExportApi,
  );
