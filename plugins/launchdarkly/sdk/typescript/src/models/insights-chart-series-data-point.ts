import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsightsChartSeriesDataPoint = {
  /** X-axis value */
  x: number;
  /** Y-axis value */
  y: number;
  /** Additional values for the data point */
  values?: Record<string, Record<string, unknown>>;
};

export const insightsChartSeriesDataPointSchema: Schema<InsightsChartSeriesDataPoint> =
  s.object<InsightsChartSeriesDataPoint>({
    x: s.int(),
    y: s.int(),
    values: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  });
