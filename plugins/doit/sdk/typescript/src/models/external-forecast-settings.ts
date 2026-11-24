import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  externalForecastDateRangeSchema,
  type ExternalForecastDateRange,
} from "./external-forecast-date-range.js";
import { Mode1, mode1Schema } from "./mode1.js";

/**
 * Settings for cost forecasting on the report. Historical fields choose which past data the model
 * learns from. Future fields choose how far ahead predicted costs are projected. When a custom date
 * range is set for a side, it takes precedence over the corresponding interval count.
 * futureCustomDateRange is converted to futureTimeIntervals using the report timeInterval.
 * Providing forecastSettings enables forecast (advancedAnalysis.forecast) automatically. On PATCH,
 * omit forecastSettings to leave forecasting unchanged; send forecastSettings: null to
 * clear/disable forecasting (also removes the forecast feature flag). An empty object enables
 * forecast with default mode totals. Interval counts outside the allowed min/max for the report
 * timeInterval are rejected with a validation error that includes the allowed range.
 */
export type ExternalForecastSettings = {
  /** Forecast granularity mode. @default Mode1.Totals */
  mode?: Mode1;
  /**
   * How many past timeInterval periods of data the model learns from. Allowed ranges by
   * timeInterval: hour 2-1000, day 2-500, week 2-100, month 2-36, quarter 2-12, year 2-6.
   */
  historicalTimeIntervals?: number;
  /**
   * How many future timeInterval periods of predicted costs to project. Allowed ranges by
   * timeInterval: hour 1-1000, day 1-100, week 1-52, month 1-12, quarter 1-4, year 1-3.
   */
  futureTimeIntervals?: number;
  /**
   * Past date range of billed data the model learns from. Takes precedence over
   * historicalTimeIntervals.
   */
  historicalCustomDateRange?: ExternalForecastDateRange;
  /**
   * Date range for how far ahead to project predicted costs. Takes precedence over
   * futureTimeIntervals. The range must resolve to a futureTimeIntervals count within the allowed
   * min/max for the report timeInterval.
   */
  futureCustomDateRange?: ExternalForecastDateRange;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalForecastSettingsSchema: Schema<ExternalForecastSettings> =
  s.object<ExternalForecastSettings>(
    {
      mode: s.defaulted(mode1Schema, Mode1.Totals),
      historicalTimeIntervals: s.optional(s.int()),
      futureTimeIntervals: s.optional(s.int()),
      historicalCustomDateRange: s.optional(s.lazy(() => externalForecastDateRangeSchema)),
      futureCustomDateRange: s.optional(s.lazy(() => externalForecastDateRangeSchema)),
    },
    { additionalProperties: s.json() },
  );
