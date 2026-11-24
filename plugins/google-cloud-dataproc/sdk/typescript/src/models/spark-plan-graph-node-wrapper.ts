import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sparkPlanGraphClusterSchema, type SparkPlanGraphCluster } from "./spark-plan-graph-cluster.js";
import { sparkPlanGraphNodeSchema, type SparkPlanGraphNode } from "./spark-plan-graph-node.js";

/** Wrapper user to represent either a node or a cluster. */
export type SparkPlanGraphNodeWrapper = {
  /** Represents a node in the spark plan tree. */
  node?: SparkPlanGraphNode;
  /** Represents a tree of spark plan. */
  cluster?: SparkPlanGraphCluster;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkPlanGraphNodeWrapperSchema: Schema<SparkPlanGraphNodeWrapper> =
  s.object<SparkPlanGraphNodeWrapper>(
    {
      node: s.optional(s.lazy(() => sparkPlanGraphNodeSchema)),
      cluster: s.optional(s.lazy(() => sparkPlanGraphClusterSchema)),
    },
    { additionalProperties: s.json() },
  );
