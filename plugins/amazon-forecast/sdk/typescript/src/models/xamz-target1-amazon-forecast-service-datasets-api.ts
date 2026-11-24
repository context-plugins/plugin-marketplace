import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceDatasetsApi = {
  AmazonForecastDeleteDataset: "AmazonForecast.DeleteDataset",
} as const;
export type XAmzTarget1AmazonForecastServiceDatasetsApi =
  | (typeof XAmzTarget1AmazonForecastServiceDatasetsApi)[keyof typeof XAmzTarget1AmazonForecastServiceDatasetsApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceDatasetsApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceDatasetsApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceDatasetsApi>(XAmzTarget1AmazonForecastServiceDatasetsApi);
