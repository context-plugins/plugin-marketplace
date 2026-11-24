import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gkeNodeConfig2Schema, type GkeNodeConfig2 } from "./gke-node-config2.js";
import {
  gkeNodePoolAutoscalingConfig2Schema,
  type GkeNodePoolAutoscalingConfig2,
} from "./gke-node-pool-autoscaling-config2.js";

/**
 * Input only. The configuration for the GKE node pool.If specified, Dataproc attempts to create a
 * node pool with the specified shape. If one with the same name already exists, it is verified
 * against all specified fields. If a field differs, the virtual cluster creation will fail.If
 * omitted, any node pool with the specified name is used. If a node pool with the specified name
 * does not exist, Dataproc create a node pool with default values.This is an input only field. It
 * will not be returned by the API.
 */
export type GkeNodePoolConfig2 = {
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

export const gkeNodePoolConfig2Schema: Schema<GkeNodePoolConfig2> = s.object<GkeNodePoolConfig2>(
  {
    autoscaling: s.optional(s.lazy(() => gkeNodePoolAutoscalingConfig2Schema)),
    config: s.optional(s.lazy(() => gkeNodeConfig2Schema)),
    locations: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
