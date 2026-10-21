import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightsChartBoundsSchema, type InsightsChartBounds } from "./insights-chart-bounds.js";

export type InsightsChartSeriesMetadata = {
  /** Name of the series */
  name: string;
  /** Aggregate count of the series values */
  count?: number;
  /** Bounds for the series data */
  bounds?: InsightsChartBounds[];
};

export const insightsChartSeriesMetadataSchema: Schema<InsightsChartSeriesMetadata> =
  s.object<InsightsChartSeriesMetadata>({
    name: s.string(),
    count: s.optional(s.int()),
    bounds: s.optional(s.array(s.lazy(() => insightsChartBoundsSchema))),
  });
