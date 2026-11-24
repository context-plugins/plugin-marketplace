import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gkeNodeConfig2Schema, type GkeNodeConfig2 } from "./gke-node-config2.js";
import {
  gkeNodePoolAutoscalingConfig2Schema,
  type GkeNodePoolAutoscalingConfig2,
} from "./gke-node-pool-autoscaling-config2.js";

/**
 * The configuration of a GKE node pool used by a Dataproc-on-GKE cluster
 * (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).
 */
export type GkeNodePoolConfig = {
  /**
   * Optional. The autoscaler configuration for this node pool. The autoscaler is enabled only when
   * a valid configuration is present.
   */
  autoscaling?: GkeNodePoolAutoscalingConfig2;
  /** Optional. The node pool configuration. */
  config?: GkeNodeConfig2;
  /**
   * Optional. The list of Compute Engine zones
   * (https://cloud.google.com/compute/docs/zones#available) where node pool nodes associated with a
   * Dataproc on GKE virtual cluster will be located.Note: All node pools associated with a virtual
   * cluster must be located in the same region as the virtual cluster, and they must be located in
   * the same zone within that region.If a location is not specified during node pool creation,
   * Dataproc on GKE will choose the zone.
   */
  locations?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gkeNodePoolConfigSchema: Schema<GkeNodePoolConfig> = s.object<GkeNodePoolConfig>(
  {
    autoscaling: s.optional(s.lazy(() => gkeNodePoolAutoscalingConfig2Schema)),
    config: s.optional(s.lazy(() => gkeNodeConfig2Schema)),
    locations: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
