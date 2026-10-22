import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightsChartMetadataSchema, type InsightsChartMetadata } from "./insights-chart-metadata.js";
import { insightsChartSeriesSchema, type InsightsChartSeries } from "./insights-chart-series.js";

export type InsightsChart = {
  metadata: InsightsChartMetadata;
  /** Series data for the chart */
  series: InsightsChartSeries[];
};

export const insightsChartSchema: Schema<InsightsChart> = s.object<InsightsChart>({
  metadata: insightsChartMetadataSchema,
  series: s.array(s.lazy(() => insightsChartSeriesSchema)),
});
