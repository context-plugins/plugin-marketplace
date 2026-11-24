import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gkeNodePoolAcceleratorConfigSchema,
  type GkeNodePoolAcceleratorConfig,
} from "./gke-node-pool-accelerator-config.js";

/** Optional. The node pool configuration. */
export type GkeNodeConfig2 = {
  /**
   * Optional. The number of local SSD disks to attach to the node, which is limited by the maximum
   * number of disks allowable per zone (see Adding Local SSDs
   * (https://cloud.google.com/compute/docs/disks/local-ssd)).
   */
  localSsdCount?: number;
  /**
   * Optional. The Customer Managed Encryption Key (CMEK)
   * (https://cloud.google.com/kubernetes-engine/docs/how-to/using-cmek) used to encrypt the boot
   * disk attached to each node in the node pool. Specify the key using the following format:
   * projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}
   */
  bootDiskKmsKey?: string;
  /**
   * Optional. Specifies the service account
   * (https://cloud.google.com/dataproc/docs/guides/dpgke/dataproc-gke-iam) to be used by the node
   * pools. Specify the email address of the service account or its full resource name.Format:
   * projects/{project}/serviceAccounts/{service_account_email} or {service_account_email}.
   */
  serviceAccount?: string;
  /**
   * Optional. A list of hardware accelerators (https://cloud.google.com/compute/docs/gpus) to
   * attach to each node.
   */
  accelerators?: GkeNodePoolAcceleratorConfig[];
  /**
   * Optional. Whether the nodes are created as legacy preemptible VM instances
   * (https://cloud.google.com/compute/docs/instances/preemptible). Also see Spot VMs, preemptible
   * VM instances without a maximum lifetime. Legacy and Spot preemptible nodes cannot be used in a
   * node pool with the CONTROLLER role or in the DEFAULT node pool if the CONTROLLER role is not
   * assigned (the DEFAULT node pool will assume the CONTROLLER role).
   */
  preemptible?: boolean;
  /**
   * Optional. Whether the nodes are created as Spot VM instances
   * (https://cloud.google.com/compute/docs/instances/spot). Spot VMs are the latest update to
   * legacy preemptible VMs. Spot VMs do not have a maximum lifetime. Legacy and Spot preemptible
   * nodes cannot be used in a node pool with the CONTROLLER role or in the DEFAULT node pool if the
   * CONTROLLER role is not assigned (the DEFAULT node pool will assume the CONTROLLER role).
   */
  spot?: boolean;
  /**
   * Optional. Minimum CPU platform
   * (https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform) to be used by this
   * instance. The instance may be scheduled on the specified or a newer CPU platform. Specify the
   * friendly names of CPU platforms, such as "Intel Haswell"` or Intel Sandy Bridge".
   */
  minCpuPlatform?: string;
  /**
   * Optional. The name of a Compute Engine machine type
   * (https://cloud.google.com/compute/docs/machine-types).
   */
  machineType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gkeNodeConfig2Schema: Schema<GkeNodeConfig2> = s.object<GkeNodeConfig2>(
  {
    localSsdCount: s.optional(s.int()),
    bootDiskKmsKey: s.optional(s.string()),
    serviceAccount: s.optional(s.string()),
    accelerators: s.optional(s.array(s.lazy(() => gkeNodePoolAcceleratorConfigSchema))),
    preemptible: s.optional(s.boolean()),
    spot: s.optional(s.boolean()),
    minCpuPlatform: s.optional(s.string()),
    machineType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
