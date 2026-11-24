import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceForecastExportJobApi = {
  AmazonForecastDescribeForecastExportJob: "AmazonForecast.DescribeForecastExportJob",
} as const;
export type XAmzTarget2AmazonForecastServiceForecastExportJobApi =
  | (typeof XAmzTarget2AmazonForecastServiceForecastExportJobApi)[keyof typeof XAmzTarget2AmazonForecastServiceForecastExportJobApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceForecastExportJobApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceForecastExportJobApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceForecastExportJobApi>(
    XAmzTarget2AmazonForecastServiceForecastExportJobApi,
  );
