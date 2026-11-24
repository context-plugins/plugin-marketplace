import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for
 * an existing GKE cluster.
 */
export type NamespacedGkeDeploymentTarget = {
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

export const namespacedGkeDeploymentTargetSchema: Schema<NamespacedGkeDeploymentTarget> =
  s.object<NamespacedGkeDeploymentTarget>(
    {
      targetGkeCluster: s.optional(s.string()),
      clusterNamespace: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
