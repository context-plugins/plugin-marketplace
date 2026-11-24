import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi = {
  AmazonForecastListWhatIfForecastExports: "AmazonForecast.ListWhatIfForecastExports",
} as const;
export type XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi =
  | (typeof XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi)[keyof typeof XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServiceWhatIfForecastExportApiSchema: EnumSchema<XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi> =
  s.enumOf<XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi>(
    XAmzTarget3AmazonForecastServiceWhatIfForecastExportApi,
  );
