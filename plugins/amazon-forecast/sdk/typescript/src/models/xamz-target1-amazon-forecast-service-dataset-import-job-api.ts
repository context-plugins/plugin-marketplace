import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceDatasetImportJobApi = {
  AmazonForecastDeleteDatasetImportJob: "AmazonForecast.DeleteDatasetImportJob",
} as const;
export type XAmzTarget1AmazonForecastServiceDatasetImportJobApi =
  | (typeof XAmzTarget1AmazonForecastServiceDatasetImportJobApi)[keyof typeof XAmzTarget1AmazonForecastServiceDatasetImportJobApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceDatasetImportJobApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceDatasetImportJobApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceDatasetImportJobApi>(
    XAmzTarget1AmazonForecastServiceDatasetImportJobApi,
  );
