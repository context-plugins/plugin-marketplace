import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clusterConfig3Schema, type ClusterConfig3 } from "./cluster-config3.js";

/** Cluster that is managed by the workflow. */
export type ManagedCluster = {
  /**
   * Optional. The labels to associate with this cluster.Label keys must be between 1 and 63
   * characters long, and must conform to the following PCRE regular expression:
   * \p{Ll}\p{Lo}{0,62}Label values must be between 1 and 63 characters long, and must conform to
   * the following PCRE regular expression: \p{Ll}\p{Lo}\p{N}_-{0,63}No more than 32 labels can be
   * associated with a given cluster.
   */
  labels?: Record<string, string>;
  /**
   * Required. The cluster name prefix. A unique cluster name will be formed by appending a random
   * suffix.The name must contain only lower-case letters (a-z), numbers (0-9), and hyphens (-).
   * Must begin with a letter. Cannot begin or end with hyphen. Must consist of between 2 and 35
   * characters.
   */
  clusterName?: string;
  /** Required. The cluster configuration. */
  config?: ClusterConfig3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const managedClusterSchema: Schema<ManagedCluster> = s.object<ManagedCluster>(
  {
    labels: s.optional(s.record(s.string(), s.string())),
    clusterName: s.optional(s.string()),
    config: s.optional(s.lazy(() => clusterConfig3Schema)),
  },
  { additionalProperties: s.json() },
);
