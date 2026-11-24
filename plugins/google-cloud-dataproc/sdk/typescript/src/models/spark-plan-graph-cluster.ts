import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sparkPlanGraphNodeWrapperSchema,
  type SparkPlanGraphNodeWrapper,
} from "./spark-plan-graph-node-wrapper.js";
import { sqlPlanMetricSchema, type SqlPlanMetric } from "./sql-plan-metric.js";

/** Represents a tree of spark plan. */
export type SparkPlanGraphCluster = {
  nodes?: SparkPlanGraphNodeWrapper[];
  name?: string;
  sparkPlanGraphClusterId?: string;
  desc?: string;
  /** Optional. Additional metadata for the spark plan graph cluster. */
  metadata?: Record<string, string>;
  metrics?: SqlPlanMetric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkPlanGraphClusterSchema: Schema<SparkPlanGraphCluster> = s.object<SparkPlanGraphCluster>(
  {
    nodes: s.optional(s.array(s.lazy(() => sparkPlanGraphNodeWrapperSchema))),
    name: s.optional(s.string()),
    sparkPlanGraphClusterId: s.optional(s.string()),
    desc: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.string())),
    metrics: s.optional(s.array(s.lazy(() => sqlPlanMetricSchema))),
  },
  { additionalProperties: s.json() },
);
