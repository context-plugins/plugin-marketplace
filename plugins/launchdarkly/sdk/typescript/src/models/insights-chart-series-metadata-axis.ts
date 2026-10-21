import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsightsChartSeriesMetadataAxis = {
  /** Unit of the axis */
  unit: string;
};

export const insightsChartSeriesMetadataAxisSchema: Schema<InsightsChartSeriesMetadataAxis> =
  s.object<InsightsChartSeriesMetadataAxis>({
    unit: s.string(),
  });
