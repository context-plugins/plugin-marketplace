import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sqlPlanMetricSchema, type SqlPlanMetric } from "./sql-plan-metric.js";

/** Represents a node in the spark plan tree. */
export type SparkPlanGraphNode = {
  name?: string;
  sparkPlanGraphNodeId?: string;
  /** Optional. Additional metadata for the spark plan graph cluster. */
  metadata?: Record<string, string>;
  desc?: string;
  metrics?: SqlPlanMetric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkPlanGraphNodeSchema: Schema<SparkPlanGraphNode> = s.object<SparkPlanGraphNode>(
  {
    name: s.optional(s.string()),
    sparkPlanGraphNodeId: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.string())),
    desc: s.optional(s.string()),
    metrics: s.optional(s.array(s.lazy(() => sqlPlanMetricSchema))),
  },
  { additionalProperties: s.json() },
);
