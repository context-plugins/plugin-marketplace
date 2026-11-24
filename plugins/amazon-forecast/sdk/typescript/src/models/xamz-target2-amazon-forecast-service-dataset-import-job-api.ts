import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceDatasetImportJobApi = {
  AmazonForecastDescribeDatasetImportJob: "AmazonForecast.DescribeDatasetImportJob",
} as const;
export type XAmzTarget2AmazonForecastServiceDatasetImportJobApi =
  | (typeof XAmzTarget2AmazonForecastServiceDatasetImportJobApi)[keyof typeof XAmzTarget2AmazonForecastServiceDatasetImportJobApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceDatasetImportJobApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceDatasetImportJobApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceDatasetImportJobApi>(
    XAmzTarget2AmazonForecastServiceDatasetImportJobApi,
  );
