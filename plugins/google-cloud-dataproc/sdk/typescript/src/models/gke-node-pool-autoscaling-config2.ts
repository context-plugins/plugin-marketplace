import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. The autoscaler configuration for this node pool. The autoscaler is enabled only when a
 * valid configuration is present.
 */
export type GkeNodePoolAutoscalingConfig2 = {
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

export const gkeNodePoolAutoscalingConfig2Schema: Schema<GkeNodePoolAutoscalingConfig2> =
  s.object<GkeNodePoolAutoscalingConfig2>(
    {
      minNodeCount: s.optional(s.int()),
      maxNodeCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
