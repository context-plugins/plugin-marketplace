import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RuleConfInputKubeMetrics = {
  /** JavaScript expression applied to Kubernetes objects. Return 'true' to include it. */
  filter: string;
  /** Optional description of this rule's purpose */
  description?: string;
};

export const ruleConfInputKubeMetricsSchema: Schema<RuleConfInputKubeMetrics> =
  s.object<RuleConfInputKubeMetrics>({
    filter: s.string(),
    description: s.optional(s.string()),
  });
