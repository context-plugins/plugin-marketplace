import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AmazonForecastServiceOperationsApi = {
  AmazonForecastGetAccuracyMetrics: "AmazonForecast.GetAccuracyMetrics",
} as const;
export type XAmzTarget4AmazonForecastServiceOperationsApi =
  | (typeof XAmzTarget4AmazonForecastServiceOperationsApi)[keyof typeof XAmzTarget4AmazonForecastServiceOperationsApi]
  | (string & {});

export const xAmzTarget4AmazonForecastServiceOperationsApiSchema: EnumSchema<XAmzTarget4AmazonForecastServiceOperationsApi> =
  s.enumOf<XAmzTarget4AmazonForecastServiceOperationsApi>(XAmzTarget4AmazonForecastServiceOperationsApi);
