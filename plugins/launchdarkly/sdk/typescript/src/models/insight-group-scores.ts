import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { insightsMetricScoreSchema, type InsightsMetricScore } from "./insights-metric-score.js";

export type InsightGroupScores = {
  overall: InsightsMetricScore;
  deploymentFrequency: InsightsMetricScore;
  deploymentFailureRate: InsightsMetricScore;
  leadTime: InsightsMetricScore;
  impactSize: InsightsMetricScore;
  experimentationCoverage: InsightsMetricScore;
  flagHealth: InsightsMetricScore;
  velocity: InsightsMetricScore;
  risk: InsightsMetricScore;
  efficiency: InsightsMetricScore;
  creationRatio?: InsightsMetricScore;
};

export const insightGroupScoresSchema: Schema<InsightGroupScores> = s.object<InsightGroupScores>({
  overall: insightsMetricScoreSchema,
  deploymentFrequency: insightsMetricScoreSchema,
  deploymentFailureRate: insightsMetricScoreSchema,
  leadTime: insightsMetricScoreSchema,
  impactSize: insightsMetricScoreSchema,
  experimentationCoverage: insightsMetricScoreSchema,
  flagHealth: insightsMetricScoreSchema,
  velocity: insightsMetricScoreSchema,
  risk: insightsMetricScoreSchema,
  efficiency: insightsMetricScoreSchema,
  creationRatio: s.optional(s.lazy(() => insightsMetricScoreSchema)),
});
