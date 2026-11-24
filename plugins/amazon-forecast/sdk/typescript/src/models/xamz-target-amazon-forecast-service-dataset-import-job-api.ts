import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceDatasetImportJobApi = {
  AmazonForecastCreateDatasetImportJob: "AmazonForecast.CreateDatasetImportJob",
} as const;
export type XAmzTargetAmazonForecastServiceDatasetImportJobApi =
  | (typeof XAmzTargetAmazonForecastServiceDatasetImportJobApi)[keyof typeof XAmzTargetAmazonForecastServiceDatasetImportJobApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceDatasetImportJobApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceDatasetImportJobApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceDatasetImportJobApi>(
    XAmzTargetAmazonForecastServiceDatasetImportJobApi,
  );
