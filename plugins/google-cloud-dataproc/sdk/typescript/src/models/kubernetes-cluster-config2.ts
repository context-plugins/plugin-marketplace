import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gkeClusterConfig2Schema, type GkeClusterConfig2 } from "./gke-cluster-config2.js";
import {
  kubernetesSoftwareConfig2Schema,
  type KubernetesSoftwareConfig2,
} from "./kubernetes-software-config2.js";

/** Required. The configuration for running the cluster on Kubernetes. */
export type KubernetesClusterConfig2 = {
  /** Required. The configuration for running the Dataproc cluster on GKE. */
  gkeClusterConfig?: GkeClusterConfig2;
  /**
   * Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not
   * exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is
   * not installed into it. If not specified, the name of the Dataproc Cluster is used.
   */
  kubernetesNamespace?: string;
  /** Optional. The software configuration for this Dataproc cluster running on Kubernetes. */
  kubernetesSoftwareConfig?: KubernetesSoftwareConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const kubernetesClusterConfig2Schema: Schema<KubernetesClusterConfig2> =
  s.object<KubernetesClusterConfig2>(
    {
      gkeClusterConfig: s.optional(s.lazy(() => gkeClusterConfig2Schema)),
      kubernetesNamespace: s.optional(s.string()),
      kubernetesSoftwareConfig: s.optional(s.lazy(() => kubernetesSoftwareConfig2Schema)),
    },
    { additionalProperties: s.json() },
  );
