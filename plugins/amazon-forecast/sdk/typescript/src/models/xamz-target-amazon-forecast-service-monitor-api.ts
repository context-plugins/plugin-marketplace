import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonForecastServiceMonitorApi = {
  AmazonForecastCreateMonitor: "AmazonForecast.CreateMonitor",
} as const;
export type XAmzTargetAmazonForecastServiceMonitorApi =
  | (typeof XAmzTargetAmazonForecastServiceMonitorApi)[keyof typeof XAmzTargetAmazonForecastServiceMonitorApi]
  | (string & {});

export const xAmzTargetAmazonForecastServiceMonitorApiSchema: EnumSchema<XAmzTargetAmazonForecastServiceMonitorApi> =
  s.enumOf<XAmzTargetAmazonForecastServiceMonitorApi>(XAmzTargetAmazonForecastServiceMonitorApi);
