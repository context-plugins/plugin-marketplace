import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonForecastServiceMonitorApi = {
  AmazonForecastDescribeMonitor: "AmazonForecast.DescribeMonitor",
} as const;
export type XAmzTarget2AmazonForecastServiceMonitorApi =
  | (typeof XAmzTarget2AmazonForecastServiceMonitorApi)[keyof typeof XAmzTarget2AmazonForecastServiceMonitorApi]
  | (string & {});

export const xAmzTarget2AmazonForecastServiceMonitorApiSchema: EnumSchema<XAmzTarget2AmazonForecastServiceMonitorApi> =
  s.enumOf<XAmzTarget2AmazonForecastServiceMonitorApi>(XAmzTarget2AmazonForecastServiceMonitorApi);
