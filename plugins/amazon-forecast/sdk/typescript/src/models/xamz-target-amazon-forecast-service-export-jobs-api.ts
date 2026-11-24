import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceExportJobsApi = {
  AmazonForecastCreateForecastExportJob: "AmazonForecast.CreateForecastExportJob",
} as const;
export type XAmzTargetAmazonForecastServiceExportJobsApi =
  | (typeof XAmzTargetAmazonForecastServiceExportJobsApi)[keyof typeof XAmzTargetAmazonForecastServiceExportJobsApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceExportJobsApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceExportJobsApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceExportJobsApi>(XAmzTargetAmazonForecastServiceExportJobsApi);
