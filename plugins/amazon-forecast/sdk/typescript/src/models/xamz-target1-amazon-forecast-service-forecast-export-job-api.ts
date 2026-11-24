import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceForecastExportJobApi = {
  AmazonForecastDeleteForecastExportJob: "AmazonForecast.DeleteForecastExportJob",
} as const;
export type XAmzTarget1AmazonForecastServiceForecastExportJobApi =
  | (typeof XAmzTarget1AmazonForecastServiceForecastExportJobApi)[keyof typeof XAmzTarget1AmazonForecastServiceForecastExportJobApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceForecastExportJobApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceForecastExportJobApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceForecastExportJobApi>(
    XAmzTarget1AmazonForecastServiceForecastExportJobApi,
  );
