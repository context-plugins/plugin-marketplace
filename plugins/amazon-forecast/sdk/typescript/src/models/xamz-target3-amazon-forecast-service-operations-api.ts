import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServiceOperationsApi = {
  AmazonForecastDeleteResourceTree: "AmazonForecast.DeleteResourceTree",
} as const;
export type XAmzTarget3AmazonForecastServiceOperationsApi =
  | (typeof XAmzTarget3AmazonForecastServiceOperationsApi)[keyof typeof XAmzTarget3AmazonForecastServiceOperationsApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServiceOperationsApiSchema: EnumSchema<XAmzTarget3AmazonForecastServiceOperationsApi> =
  s.enumOf<XAmzTarget3AmazonForecastServiceOperationsApi>(XAmzTarget3AmazonForecastServiceOperationsApi);
