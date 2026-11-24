import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonForecastServiceMonitorApi = {
  AmazonForecastListMonitors: "AmazonForecast.ListMonitors",
} as const;
export type XAmzTarget3AmazonForecastServiceMonitorApi =
  | (typeof XAmzTarget3AmazonForecastServiceMonitorApi)[keyof typeof XAmzTarget3AmazonForecastServiceMonitorApi]
  | (string & {});

export const xAmzTarget3AmazonForecastServiceMonitorApiSchema: EnumSchema<XAmzTarget3AmazonForecastServiceMonitorApi> =
  s.enumOf<XAmzTarget3AmazonForecastServiceMonitorApi>(XAmzTarget3AmazonForecastServiceMonitorApi);
