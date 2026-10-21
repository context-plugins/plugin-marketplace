import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InsightsMetricTierDefinition = {
  /** Metric indicator tier */
  indicator: string;
  /** Metric indicator description */
  description: string;
};

export const insightsMetricTierDefinitionSchema: Schema<InsightsMetricTierDefinition> =
  s.object<InsightsMetricTierDefinition>({
    indicator: s.string(),
    description: s.string(),
  });
