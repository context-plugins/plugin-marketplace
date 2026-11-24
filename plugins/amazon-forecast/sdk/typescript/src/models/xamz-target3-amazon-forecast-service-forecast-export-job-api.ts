import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServiceForecastExportJobApi = {
  AmazonForecastListForecastExportJobs: "AmazonForecast.ListForecastExportJobs",
} as const;
export type XAmzTarget3AmazonForecastServiceForecastExportJobApi =
  | (typeof XAmzTarget3AmazonForecastServiceForecastExportJobApi)[keyof typeof XAmzTarget3AmazonForecastServiceForecastExportJobApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServiceForecastExportJobApiSchema: EnumSchema<XAmzTarget3AmazonForecastServiceForecastExportJobApi> =
  s.enumOf<XAmzTarget3AmazonForecastServiceForecastExportJobApi>(
    XAmzTarget3AmazonForecastServiceForecastExportJobApi,
  );
