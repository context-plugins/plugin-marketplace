import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { autoscalingConfig3Schema, type AutoscalingConfig3 } from "./autoscaling-config3.js";
import { auxiliaryNodeGroupSchema, type AuxiliaryNodeGroup } from "./auxiliary-node-group.js";
import { clusterTierSchema, type ClusterTier } from "./cluster-tier.js";
import { clusterTypeSchema, type ClusterType } from "./cluster-type.js";
import { dataprocMetricConfig2Schema, type DataprocMetricConfig2 } from "./dataproc-metric-config2.js";
import { encryptionConfig3Schema, type EncryptionConfig3 } from "./encryption-config3.js";
import { endpointConfig2Schema, type EndpointConfig2 } from "./endpoint-config2.js";
import { engineSchema, type Engine } from "./engine.js";
import {
  flexibleInstanceGroupConfig1Schema,
  type FlexibleInstanceGroupConfig1,
} from "./flexible-instance-group-config1.js";
import {
  flexibleInstanceGroupConfig2Schema,
  type FlexibleInstanceGroupConfig2,
} from "./flexible-instance-group-config2.js";
import {
  flexibleInstanceGroupConfig4Schema,
  type FlexibleInstanceGroupConfig4,
} from "./flexible-instance-group-config4.js";
import { gceClusterConfig2Schema, type GceClusterConfig2 } from "./gce-cluster-config2.js";
import { gkeClusterConfig3Schema, type GkeClusterConfig3 } from "./gke-cluster-config3.js";
import { instanceGroupConfig1Schema, type InstanceGroupConfig1 } from "./instance-group-config1.js";
import { instanceGroupConfig3Schema, type InstanceGroupConfig3 } from "./instance-group-config3.js";
import { instanceGroupConfig5Schema, type InstanceGroupConfig5 } from "./instance-group-config5.js";
import { lifecycleConfig2Schema, type LifecycleConfig2 } from "./lifecycle-config2.js";
import { metastoreConfig3Schema, type MetastoreConfig3 } from "./metastore-config3.js";
import {
  nodeInitializationActionSchema,
  type NodeInitializationAction,
} from "./node-initialization-action.js";
import { schedulingConfig2Schema, type SchedulingConfig2 } from "./scheduling-config2.js";
import { securityConfig2Schema, type SecurityConfig2 } from "./security-config2.js";
import { softwareConfig2Schema, type SoftwareConfig2 } from "./software-config2.js";

/** The cluster config. */
export type ClusterConfig = {
  /**
   * Optional. A Cloud Storage bucket used to collect checkpoint diagnostic data
   * (https://cloud.google.com/dataproc/docs/support/diagnose-clusters#checkpoint_diagnostic_data).
   * If you do not specify a diagnostic bucket, The service will use the temp bucket to collect the
   * checkpoint diagnostic data. This field requires a Cloud Storage bucket name, not a gs://... URI
   * to a Cloud Storage bucket.
   */
  diagnosticBucket?: string;
  /** Optional. Security settings for the cluster. */
  securityConfig?: SecurityConfig2;
  /** Optional. The config settings for cluster software. */
  softwareConfig?: SoftwareConfig2;
  /**
   * Optional. The High Obtainability (HO) config settings for the cluster's worker instances.In
   * High Obtainability (HO) mode, flexible configs are the single source of truth for desired
   * cluster configuration. num_instances represents the desired capacity of the worker group and is
   * mutable via cluster updates and autoscaling.Only one of worker_config or worker_flexible_config
   * can be set.In High Obtainability (HO) mode, for multi-node (standard) clusters, both
   * master_flexible_config and worker_flexible_config must be specified. Mixing standard and
   * flexible configs across node groups is not allowed. Single-node clusters do not specify worker
   * configs.
   */
  workerFlexibleConfig?: FlexibleInstanceGroupConfig4;
  /**
   * Optional. A Cloud Storage bucket used to store ephemeral cluster and jobs data, such as Spark
   * and MapReduce history files. If you do not specify a temp bucket, the service will determine a
   * Cloud Storage location (US, ASIA, or EU) for your cluster's temp bucket according to the
   * Compute Engine zone where your cluster is deployed, and then create and manage this
   * project-level, per-location bucket. The default bucket has a TTL of 90 days, but you can use
   * any TTL (or none) if you specify a bucket (see staging and temp buckets
   * (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This
   * field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
   */
  tempBucket?: string;
  /**
   * Optional. The High Obtainability (HO) config settings for the cluster's master instances.In
   * High Obtainability (HO) mode, flexible configs are the single source of truth for desired
   * cluster configuration across node groups: * For single-node clusters: master_flexible_config
   * must be specified, and no worker configs should be set. * For multi-node (standard) clusters:
   * both master_flexible_config and worker_flexible_config must be specified. Mixing standard and
   * flexible configs across node groups is not allowed.Only one of master_config or
   * master_flexible_config can be set.
   */
  masterFlexibleConfig?: FlexibleInstanceGroupConfig1;
  /** Optional. Encryption settings for the cluster. */
  encryptionConfig?: EncryptionConfig3;
  /** Optional. Config for scheduling the resources to be allocated when available. */
  schedulingConfig?: SchedulingConfig2;
  /** Optional. Lifecycle setting for the cluster. */
  lifecycleConfig?: LifecycleConfig2;
  /**
   * Optional. Autoscaling config for the policy associated with the cluster. Cluster does not
   * autoscale if this field is unset.
   */
  autoscalingConfig?: AutoscalingConfig3;
  /** Optional. The cluster tier. */
  clusterTier?: ClusterTier;
  /**
   * Optional. BETA. The Kubernetes Engine config for clusters deployed to Kubernetes. These config
   * settings are mutually exclusive with Compute Engine-based options, such as gce_cluster_config,
   * master_config, worker_config, secondary_worker_config, and autoscaling_config.
   */
  gkeClusterConfig?: GkeClusterConfig3;
  /** Optional. The shared Compute Engine config settings for all instances in a cluster. */
  gceClusterConfig?: GceClusterConfig2;
  /**
   * Optional. The High Obtainability (HO) config settings for a cluster's secondary worker
   * instances.In High Obtainability (HO) mode, flexible configs are the single source of truth for
   * desired cluster configuration. num_instances represents the desired capacity of the secondary
   * worker group and is mutable via cluster updates and autoscaling.Only one of
   * secondary_worker_config or secondary_worker_flexible_config can be set.In High Obtainability
   * (HO) mode, secondary workers are optional. If secondary workers are used in an HO cluster, they
   * must be configured using secondary_worker_flexible_config (not secondary_worker_config).
   */
  secondaryWorkerFlexibleConfig?: FlexibleInstanceGroupConfig2;
  /** Optional. The Compute Engine config settings for the cluster's master instance. */
  masterConfig?: InstanceGroupConfig5;
  /** Optional. The cluster engine. */
  engine?: Engine;
  /**
   * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver
   * console output. If you do not specify a staging bucket, the service will determine a Cloud
   * Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute
   * Engine zone where your cluster is deployed, and then create and manage this project-level,
   * per-location bucket (see staging and temp buckets
   * (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This
   * field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
   */
  configBucket?: string;
  /** Optional. The Compute Engine config settings for the cluster's worker instances. */
  workerConfig?: InstanceGroupConfig1;
  /** Optional. The config for metrics. */
  dataprocMetricConfig?: DataprocMetricConfig2;
  /**
   * Optional. Commands to execute on each node after config is completed. By default, executables
   * are run on master and all worker nodes. You can test a node's role metadata to run an
   * executable on a master or worker node, as shown below using curl (you can also use wget):
   * ROLE=$(curl -H Metadata-Flavor:Google
   * http://metadata/computeMetadata/v1/instance/attributes/dataproc-role) if [[ "${ROLE}" ==
   * 'Master' ]]; then ... master specific actions ... else ... worker specific actions ... fi
   */
  initializationActions?: NodeInitializationAction[];
  /** Optional. The type of the cluster. */
  clusterType?: ClusterType;
  /** Optional. The node group settings. */
  auxiliaryNodeGroups?: AuxiliaryNodeGroup[];
  /** Optional. The Compute Engine config settings for a cluster's secondary worker instances */
  secondaryWorkerConfig?: InstanceGroupConfig3;
  /** Optional. Metastore configuration. */
  metastoreConfig?: MetastoreConfig3;
  /** Optional. Port/endpoint configuration for this cluster */
  endpointConfig?: EndpointConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clusterConfigSchema: Schema<ClusterConfig> = s.object<ClusterConfig>(
  {
    diagnosticBucket: s.optional(s.string()),
    securityConfig: s.optional(s.lazy(() => securityConfig2Schema)),
    softwareConfig: s.optional(s.lazy(() => softwareConfig2Schema)),
    workerFlexibleConfig: s.optional(s.lazy(() => flexibleInstanceGroupConfig4Schema)),
    tempBucket: s.optional(s.string()),
    masterFlexibleConfig: s.optional(s.lazy(() => flexibleInstanceGroupConfig1Schema)),
    encryptionConfig: s.optional(s.lazy(() => encryptionConfig3Schema)),
    schedulingConfig: s.optional(s.lazy(() => schedulingConfig2Schema)),
    lifecycleConfig: s.optional(s.lazy(() => lifecycleConfig2Schema)),
    autoscalingConfig: s.optional(s.lazy(() => autoscalingConfig3Schema)),
    clusterTier: s.optional(s.lazy(() => clusterTierSchema)),
    gkeClusterConfig: s.optional(s.lazy(() => gkeClusterConfig3Schema)),
    gceClusterConfig: s.optional(s.lazy(() => gceClusterConfig2Schema)),
    secondaryWorkerFlexibleConfig: s.optional(s.lazy(() => flexibleInstanceGroupConfig2Schema)),
    masterConfig: s.optional(s.lazy(() => instanceGroupConfig5Schema)),
    engine: s.optional(s.lazy(() => engineSchema)),
    configBucket: s.optional(s.string()),
    workerConfig: s.optional(s.lazy(() => instanceGroupConfig1Schema)),
    dataprocMetricConfig: s.optional(s.lazy(() => dataprocMetricConfig2Schema)),
    initializationActions: s.optional(s.array(s.lazy(() => nodeInitializationActionSchema))),
    clusterType: s.optional(s.lazy(() => clusterTypeSchema)),
    auxiliaryNodeGroups: s.optional(s.array(s.lazy(() => auxiliaryNodeGroupSchema))),
    secondaryWorkerConfig: s.optional(s.lazy(() => instanceGroupConfig3Schema)),
    metastoreConfig: s.optional(s.lazy(() => metastoreConfig3Schema)),
    endpointConfig: s.optional(s.lazy(() => endpointConfig2Schema)),
  },
  { additionalProperties: s.json() },
);
