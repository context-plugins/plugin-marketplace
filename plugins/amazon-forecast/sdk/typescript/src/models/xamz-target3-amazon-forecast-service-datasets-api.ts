import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServiceDatasetsApi = {
  AmazonForecastListDatasets: "AmazonForecast.ListDatasets",
} as const;
export type XAmzTarget3AmazonForecastServiceDatasetsApi =
  | (typeof XAmzTarget3AmazonForecastServiceDatasetsApi)[keyof typeof XAmzTarget3AmazonForecastServiceDatasetsApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServiceDatasetsApiSchema: EnumSchema<XAmzTarget3AmazonForecastServiceDatasetsApi> =
  s.enumOf<XAmzTarget3AmazonForecastServiceDatasetsApi>(XAmzTarget3AmazonForecastServiceDatasetsApi);
