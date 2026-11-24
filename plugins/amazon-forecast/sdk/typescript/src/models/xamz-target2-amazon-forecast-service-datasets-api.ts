import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceDatasetsApi = {
  AmazonForecastDescribeDataset: "AmazonForecast.DescribeDataset",
} as const;
export type XAmzTarget2AmazonForecastServiceDatasetsApi =
  | (typeof XAmzTarget2AmazonForecastServiceDatasetsApi)[keyof typeof XAmzTarget2AmazonForecastServiceDatasetsApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceDatasetsApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceDatasetsApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceDatasetsApi>(XAmzTarget2AmazonForecastServiceDatasetsApi);
