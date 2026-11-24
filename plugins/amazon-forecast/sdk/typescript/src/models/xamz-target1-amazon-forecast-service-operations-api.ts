import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceOperationsApi = {
  AmazonForecastCreateAutoPredictor: "AmazonForecast.CreateAutoPredictor",
} as const;
export type XAmzTarget1AmazonForecastServiceOperationsApi =
  | (typeof XAmzTarget1AmazonForecastServiceOperationsApi)[keyof typeof XAmzTarget1AmazonForecastServiceOperationsApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceOperationsApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceOperationsApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceOperationsApi>(XAmzTarget1AmazonForecastServiceOperationsApi);
