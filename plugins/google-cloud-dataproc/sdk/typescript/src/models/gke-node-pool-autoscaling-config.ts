import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of
 * the node pool to the current cluster usage.
 */
export type GkeNodePoolAutoscalingConfig = {
  /** The minimum number of nodes in the node pool. Must be >= 0 and <= max_node_count. */
  minNodeCount?: number;
  /**
   * The maximum number of nodes in the node pool. Must be >= min_node_count, and must be > 0. Note:
   * Quota must be sufficient to scale up the cluster.
   */
  maxNodeCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gkeNodePoolAutoscalingConfigSchema: Schema<GkeNodePoolAutoscalingConfig> =
  s.object<GkeNodePoolAutoscalingConfig>(
    {
      minNodeCount: s.optional(s.int()),
      maxNodeCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
