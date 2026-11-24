import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServiceDatasetImportJobApi = {
  AmazonForecastListDatasetImportJobs: "AmazonForecast.ListDatasetImportJobs",
} as const;
export type XAmzTarget3AmazonForecastServiceDatasetImportJobApi =
  | (typeof XAmzTarget3AmazonForecastServiceDatasetImportJobApi)[keyof typeof XAmzTarget3AmazonForecastServiceDatasetImportJobApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServiceDatasetImportJobApiSchema: EnumSchema<XAmzTarget3AmazonForecastServiceDatasetImportJobApi> =
  s.enumOf<XAmzTarget3AmazonForecastServiceDatasetImportJobApi>(
    XAmzTarget3AmazonForecastServiceDatasetImportJobApi,
  );
