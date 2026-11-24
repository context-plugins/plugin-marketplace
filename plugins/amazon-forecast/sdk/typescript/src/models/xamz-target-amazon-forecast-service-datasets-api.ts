import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceDatasetsApi = {
  AmazonForecastCreateDataset: "AmazonForecast.CreateDataset",
} as const;
export type XAmzTargetAmazonForecastServiceDatasetsApi =
  | (typeof XAmzTargetAmazonForecastServiceDatasetsApi)[keyof typeof XAmzTargetAmazonForecastServiceDatasetsApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceDatasetsApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceDatasetsApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceDatasetsApi>(XAmzTargetAmazonForecastServiceDatasetsApi);
