import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonForecastServiceMonitorApi = {
  AmazonForecastDeleteMonitor: "AmazonForecast.DeleteMonitor",
} as const;
export type XAmzTarget1AmazonForecastServiceMonitorApi =
  | (typeof XAmzTarget1AmazonForecastServiceMonitorApi)[keyof typeof XAmzTarget1AmazonForecastServiceMonitorApi]
  | (string & {});

export const xAmzTarget1AmazonForecastServiceMonitorApiSchema: EnumSchema<XAmzTarget1AmazonForecastServiceMonitorApi> =
  s.enumOf<XAmzTarget1AmazonForecastServiceMonitorApi>(XAmzTarget1AmazonForecastServiceMonitorApi);
