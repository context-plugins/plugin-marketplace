import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceOperationsApi = {
  AmazonForecastDescribeAutoPredictor: "AmazonForecast.DescribeAutoPredictor",
} as const;
export type XAmzTarget2AmazonForecastServiceOperationsApi =
  | (typeof XAmzTarget2AmazonForecastServiceOperationsApi)[keyof typeof XAmzTarget2AmazonForecastServiceOperationsApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceOperationsApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceOperationsApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceOperationsApi>(XAmzTarget2AmazonForecastServiceOperationsApi);
