import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightsChartMetricSchema, type InsightsChartMetric } from "./insights-chart-metric.js";
import {
  insightsChartSeriesMetadataAxisSchema,
  type InsightsChartSeriesMetadataAxis,
} from "./insights-chart-series-metadata-axis.js";

export type InsightsChartMetadata = {
  summary: Record<string, Record<string, unknown>>;
  /** Name of the chart */
  name?: string;
  metrics?: Record<string, InsightsChartMetric>;
  xAxis: InsightsChartSeriesMetadataAxis;
  yAxis: InsightsChartSeriesMetadataAxis;
};

export const insightsChartMetadataSchema: Schema<InsightsChartMetadata> = s.object<InsightsChartMetadata>({
  summary: s.record(s.string(), s.record(s.string(), s.unknown())),
  name: s.optional(s.string()),
  metrics: s.optional(
    s.record(
      s.string(),
      s.lazy(() => insightsChartMetricSchema),
    ),
  ),
  xAxis: insightsChartSeriesMetadataAxisSchema,
  yAxis: insightsChartSeriesMetadataAxisSchema,
});
