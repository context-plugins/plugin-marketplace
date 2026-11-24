import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gkeNodePoolConfig2Schema, type GkeNodePoolConfig2 } from "./gke-node-pool-config2.js";
import { roleSchema, type Role } from "./role.js";

/** GKE node pools that Dataproc workloads run on. */
export type GkeNodePoolTarget = {
  /**
   * Input only. The configuration for the GKE node pool.If specified, Dataproc attempts to create a
   * node pool with the specified shape. If one with the same name already exists, it is verified
   * against all specified fields. If a field differs, the virtual cluster creation will fail.If
   * omitted, any node pool with the specified name is used. If a node pool with the specified name
   * does not exist, Dataproc create a node pool with default values.This is an input only field. It
   * will not be returned by the API.
   */
  nodePoolConfig?: GkeNodePoolConfig2;
  /**
   * Required. The target GKE node pool. Format:
   * 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'
   */
  nodePool?: string;
  /** Required. The roles associated with the GKE node pool. */
  roles?: Role[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gkeNodePoolTargetSchema: Schema<GkeNodePoolTarget> = s.object<GkeNodePoolTarget>(
  {
    nodePoolConfig: s.optional(s.lazy(() => gkeNodePoolConfig2Schema)),
    nodePool: s.optional(s.string()),
    roles: s.optional(s.array(s.lazy(() => roleSchema))),
  },
  { additionalProperties: s.json() },
);
