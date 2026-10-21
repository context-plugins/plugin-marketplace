import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightsMetricTierDefinitionSchema,
  type InsightsMetricTierDefinition,
} from "./insights-metric-tier-definition.js";

export type InsightsChartMetric = {
  /** Metric indicator tier */
  indicator: string;
  /** Metric value */
  value: number;
  /** Metric unit */
  unit: string;
  /** Metric modifier */
  modifier: string;
  /** Metric indicator tiers */
  tiers: InsightsMetricTierDefinition[];
};

export const insightsChartMetricSchema: Schema<InsightsChartMetric> = s.object<InsightsChartMetric>({
  indicator: s.string(),
  value: s.float64(),
  unit: s.string(),
  modifier: s.string(),
  tiers: s.array(s.lazy(() => insightsMetricTierDefinitionSchema)),
});
