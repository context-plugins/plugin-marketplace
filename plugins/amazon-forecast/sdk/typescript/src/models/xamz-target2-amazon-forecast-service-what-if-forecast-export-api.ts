import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi = {
  AmazonForecastDescribeWhatIfForecastExport: "AmazonForecast.DescribeWhatIfForecastExport",
} as const;
export type XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi =
  | (typeof XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi)[keyof typeof XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceWhatIfForecastExportApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi>(
    XAmzTarget2AmazonForecastServiceWhatIfForecastExportApi,
  );
