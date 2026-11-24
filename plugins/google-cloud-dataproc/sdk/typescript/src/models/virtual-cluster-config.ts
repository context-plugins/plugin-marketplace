import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  auxiliaryServicesConfig2Schema,
  type AuxiliaryServicesConfig2,
} from "./auxiliary-services-config2.js";
import {
  kubernetesClusterConfig2Schema,
  type KubernetesClusterConfig2,
} from "./kubernetes-cluster-config2.js";

/**
 * The cluster config for a cluster that does not directly control the underlying compute resources,
 * such as a GKE cluster
 * (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-overview).
 */
export type VirtualClusterConfig = {
  /** Required. The configuration for running the cluster on Kubernetes. */
  kubernetesClusterConfig?: KubernetesClusterConfig2;
  /** Optional. Configuration of auxiliary services used by this cluster. */
  auxiliaryServicesConfig?: AuxiliaryServicesConfig2;
  /**
   * Optional. A Cloud Storage bucket used to stage job dependencies, config files, and job driver
   * console output. If you do not specify a staging bucket, the service will determine a Cloud
   * Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Compute
   * Engine zone where your cluster is deployed, and then create and manage this project-level,
   * per-location bucket (see staging and temp buckets
   * (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/staging-bucket)). This
   * field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
   */
  stagingBucket?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualClusterConfigSchema: Schema<VirtualClusterConfig> = s.object<VirtualClusterConfig>(
  {
    kubernetesClusterConfig: s.optional(s.lazy(() => kubernetesClusterConfig2Schema)),
    auxiliaryServicesConfig: s.optional(s.lazy(() => auxiliaryServicesConfig2Schema)),
    stagingBucket: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
