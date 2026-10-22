import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightsChartSeriesDataPointSchema,
  type InsightsChartSeriesDataPoint,
} from "./insights-chart-series-data-point.js";
import {
  insightsChartSeriesMetadataSchema,
  type InsightsChartSeriesMetadata,
} from "./insights-chart-series-metadata.js";

export type InsightsChartSeries = {
  metadata: InsightsChartSeriesMetadata;
  /** Data points for the series */
  data: InsightsChartSeriesDataPoint[];
};

export const insightsChartSeriesSchema: Schema<InsightsChartSeries> = s.object<InsightsChartSeries>({
  metadata: insightsChartSeriesMetadataSchema,
  data: s.array(s.lazy(() => insightsChartSeriesDataPointSchema)),
});
