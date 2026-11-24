import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gkeNodePoolTargetSchema, type GkeNodePoolTarget } from "./gke-node-pool-target.js";
import {
  namespacedGkeDeploymentTarget2Schema,
  type NamespacedGkeDeploymentTarget2,
} from "./namespaced-gke-deployment-target2.js";

/** Required. The configuration for running the Dataproc cluster on GKE. */
export type GkeClusterConfig2 = {
  /**
   * Optional. Deprecated. Use gkeClusterTarget. Used only for the deprecated beta. A target for the
   * deployment.
   *
   * @deprecated
   */
  namespacedGkeDeploymentTarget?: NamespacedGkeDeploymentTarget2;
  /**
   * Optional. A target GKE cluster to deploy to. It must be in the same project and region as the
   * Dataproc cluster (the GKE cluster can be zonal or regional). Format:
   * 'projects/{project}/locations/{location}/clusters/{cluster_id}'
   */
  gkeClusterTarget?: string;
  /**
   * Optional. GKE node pools where workloads will be scheduled. At least one node pool must be
   * assigned the DEFAULT GkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc
   * constructs a DEFAULT GkeNodePoolTarget. Each role can be given to only one GkeNodePoolTarget.
   * All node pools must have the same location settings.
   */
  nodePoolTarget?: GkeNodePoolTarget[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gkeClusterConfig2Schema: Schema<GkeClusterConfig2> = s.object<GkeClusterConfig2>(
  {
    namespacedGkeDeploymentTarget: s.optional(s.lazy(() => namespacedGkeDeploymentTarget2Schema)),
    gkeClusterTarget: s.optional(s.string()),
    nodePoolTarget: s.optional(s.array(s.lazy(() => gkeNodePoolTargetSchema))),
  },
  { additionalProperties: s.json() },
);
