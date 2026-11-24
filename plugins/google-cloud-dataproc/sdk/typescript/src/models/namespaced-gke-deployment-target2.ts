import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Deprecated. Use gkeClusterTarget. Used only for the deprecated beta. A target for the
 * deployment.
 */
export type NamespacedGkeDeploymentTarget2 = {
  /**
   * Optional. The target GKE cluster to deploy to. Format:
   * 'projects/{project}/locations/{location}/clusters/{cluster_id}'
   */
  targetGkeCluster?: string;
  /** Optional. A namespace within the GKE cluster to deploy into. */
  clusterNamespace?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const namespacedGkeDeploymentTarget2Schema: Schema<NamespacedGkeDeploymentTarget2> =
  s.object<NamespacedGkeDeploymentTarget2>(
    {
      targetGkeCluster: s.optional(s.string()),
      clusterNamespace: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
