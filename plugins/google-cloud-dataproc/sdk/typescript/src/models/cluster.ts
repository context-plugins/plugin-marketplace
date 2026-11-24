import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clusterConfig1Schema, type ClusterConfig1 } from "./cluster-config1.js";
import { clusterMetrics2Schema, type ClusterMetrics2 } from "./cluster-metrics2.js";
import { clusterStatusSchema, type ClusterStatus } from "./cluster-status.js";
import { clusterStatus1Schema, type ClusterStatus1 } from "./cluster-status1.js";
import { virtualClusterConfig2Schema, type VirtualClusterConfig2 } from "./virtual-cluster-config2.js";

/** Describes the identifying information, config, and status of a cluster */
export type Cluster = {
  /**
   * Optional. The labels to associate with this cluster. Label keys must contain 1 to 63
   * characters, and must conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values
   * may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035
   * (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a
   * cluster.
   */
  labels?: Record<string, string>;
  /** Required. The Google Cloud Platform project ID that the cluster belongs to. */
  projectId?: string;
  /**
   * Output only. Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This
   * report is available for testing purposes only. It may be changed before final release.
   */
  metrics?: ClusterMetrics2;
  /**
   * Required. The cluster name, which must be unique within a project. The name must start with a
   * lowercase letter, and can contain up to 51 lowercase letters, numbers, and hyphens. It cannot
   * end with a hyphen. The name of a deleted cluster can be reused.
   */
  clusterName?: string;
  /**
   * Output only. A cluster UUID (Unique Universal Identifier). The service generates this value
   * when it creates the cluster.
   */
  clusterUuid?: string;
  /**
   * Optional. The virtual cluster config is used when creating a cluster that does not directly
   * control the underlying compute resources, for example, when creating a GKE cluster
   * (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview). the service may
   * set default values, and values may change when clusters are updated. Exactly one of config or
   * virtual_cluster_config must be specified.
   */
  virtualClusterConfig?: VirtualClusterConfig2;
  /** Output only. The previous cluster status. */
  statusHistory?: ClusterStatus[];
  /**
   * Optional. The cluster config for a cluster of Compute Engine Instances. Note that the service
   * may set default values, and values may change when clusters are updated.Exactly one of
   * ClusterConfig or VirtualClusterConfig must be specified.
   */
  config?: ClusterConfig1;
  /** Output only. Cluster status. */
  status?: ClusterStatus1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clusterSchema: Schema<Cluster> = s.object<Cluster>(
  {
    labels: s.optional(s.record(s.string(), s.string())),
    projectId: s.optional(s.string()),
    metrics: s.optional(s.lazy(() => clusterMetrics2Schema)),
    clusterName: s.optional(s.string()),
    clusterUuid: s.optional(s.string()),
    virtualClusterConfig: s.optional(s.lazy(() => virtualClusterConfig2Schema)),
    statusHistory: s.optional(s.array(s.lazy(() => clusterStatusSchema))),
    config: s.optional(s.lazy(() => clusterConfig1Schema)),
    status: s.optional(s.lazy(() => clusterStatus1Schema)),
  },
  { additionalProperties: s.json() },
);
