import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightsMetricIndicatorRangeSchema,
  type InsightsMetricIndicatorRange,
} from "./insights-metric-indicator-range.js";

export type InsightsMetricScore = {
  /** The score for the metric */
  score: number;
  /** The keys of the metrics that were aggregated to calculate this score */
  aggregateOf?: string[];
  diffVsLastPeriod?: number;
  indicator: string;
  indicatorRange: InsightsMetricIndicatorRange;
  lastPeriod?: InsightsMetricScore;
};

export const insightsMetricScoreSchema: Schema<InsightsMetricScore> = s.object<InsightsMetricScore>({
  score: s.int(),
  aggregateOf: s.optional(s.array(s.string())),
  diffVsLastPeriod: s.optional(s.int()),
  indicator: s.string(),
  indicatorRange: insightsMetricIndicatorRangeSchema,
  lastPeriod: s.optional(s.lazy(() => insightsMetricScoreSchema)),
});
