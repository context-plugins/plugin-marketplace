import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsightsMetricIndicatorRange = {
  /** The minimum value for the indicator range */
  min: number;
  /** The maximum value for the indicator range */
  max: number;
};

export const insightsMetricIndicatorRangeSchema: Schema<InsightsMetricIndicatorRange> =
  s.object<InsightsMetricIndicatorRange>({
    min: s.int(),
    max: s.int(),
  });
