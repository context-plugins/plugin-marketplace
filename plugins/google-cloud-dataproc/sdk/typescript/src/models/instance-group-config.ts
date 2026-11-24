import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { acceleratorConfigSchema, type AcceleratorConfig } from "./accelerator-config.js";
import { diskConfig1Schema, type DiskConfig1 } from "./disk-config1.js";
import {
  instanceFlexibilityPolicy2Schema,
  type InstanceFlexibilityPolicy2,
} from "./instance-flexibility-policy2.js";
import { instanceReferenceSchema, type InstanceReference } from "./instance-reference.js";
import { managedGroupConfig2Schema, type ManagedGroupConfig2 } from "./managed-group-config2.js";
import { preemptibilitySchema, type Preemptibility } from "./preemptibility.js";
import { startupConfig2Schema, type StartupConfig2 } from "./startup-config2.js";

/**
 * The config settings for Compute Engine resources in an instance group, such as a master or worker
 * group.
 */
export type InstanceGroupConfig = {
  /** Optional. Disk option config settings. */
  diskConfig?: DiskConfig1;
  /** Output only. Specifies that this instance group contains preemptible instances. */
  isPreemptible?: boolean;
  /**
   * Optional. Instance flexibility Policy allowing a mixture of VM shapes and provisioning models.
   */
  instanceFlexibilityPolicy?: InstanceFlexibilityPolicy2;
  /**
   * Optional. The minimum number of primary worker instances to create. If min_num_instances is
   * set, cluster creation will succeed if the number of primary workers created is at least equal
   * to the min_num_instances number.Example: Cluster creation request with num_instances = 5 and
   * min_num_instances = 3: If 4 VMs are created and 1 instance fails, the failed VM is deleted. The
   * cluster is resized to 4 instances and placed in a RUNNING state. If 2 instances are created and
   * 3 instances fail, the cluster in placed in an ERROR state. The failed VMs are not deleted.
   */
  minNumInstances?: number;
  /**
   * Optional. Specifies the preemptibility of the instance group.The default value for master and
   * worker groups is NON_PREEMPTIBLE. This default cannot be changed.The default value for
   * secondary instances is PREEMPTIBLE.
   */
  preemptibility?: Preemptibility;
  /**
   * Optional. Specifies the minimum cpu platform for the Instance Group. See Minimum CPU Platform
   * (https://cloud.google.com/dataproc/docs/concepts/compute/dataproc-min-cpu).
   */
  minCpuPlatform?: string;
  /** Optional. The Compute Engine accelerator configuration for these instances. */
  accelerators?: AcceleratorConfig[];
  /**
   * Optional. The Compute Engine machine type used for cluster instances.A full URL, partial URI,
   * or short name are valid. Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2
   * projects/[project_id]/zones/[zone]/machineTypes/n1-standard-2 n1-standard-2Auto Zone Exception:
   * If you are using Auto Zone Placement
   * (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement),
   * you must use the short name of the machine type resource, for example, n1-standard-2.
   */
  machineTypeUri?: string;
  /**
   * Output only. The config for Compute Engine Instance Group Manager that manages this group. This
   * is only used for preemptible instance groups.
   */
  managedGroupConfig?: ManagedGroupConfig2;
  /** Output only. List of references to Compute Engine instances. */
  instanceReferences?: InstanceReference[];
  /**
   * Optional. The number of VM instances in the instance group. For HA cluster master_config
   * groups, must be set to 3. For standard cluster master_config groups, must be set to 1.
   */
  numInstances?: number;
  /**
   * Optional. The Compute Engine image resource used for cluster instances.The URI can represent an
   * image or image family.Image examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/[image-id]
   * projects/[project_id]/global/images/[image-id] image-idImage family examples. The service will
   * use the most recent image from the family:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/global/images/family/[custom-image-family-name]
   * projects/[project_id]/global/images/family/[custom-image-family-name]If the URI is unspecified,
   * it will be inferred from SoftwareConfig.image_version or the system default.
   */
  imageUri?: string;
  /**
   * Optional. Configuration to handle the startup of instances during cluster create and update
   * process.
   */
  startupConfig?: StartupConfig2;
  /**
   * Output only. The list of instance names, derived from cluster_name, num_instances, and the
   * instance group.
   */
  instanceNames?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instanceGroupConfigSchema: Schema<InstanceGroupConfig> = s.object<InstanceGroupConfig>(
  {
    diskConfig: s.optional(s.lazy(() => diskConfig1Schema)),
    isPreemptible: s.optional(s.boolean()),
    instanceFlexibilityPolicy: s.optional(s.lazy(() => instanceFlexibilityPolicy2Schema)),
    minNumInstances: s.optional(s.int()),
    preemptibility: s.optional(s.lazy(() => preemptibilitySchema)),
    minCpuPlatform: s.optional(s.string()),
    accelerators: s.optional(s.array(s.lazy(() => acceleratorConfigSchema))),
    machineTypeUri: s.optional(s.string()),
    managedGroupConfig: s.optional(s.lazy(() => managedGroupConfig2Schema)),
    instanceReferences: s.optional(s.array(s.lazy(() => instanceReferenceSchema))),
    numInstances: s.optional(s.int()),
    imageUri: s.optional(s.string()),
    startupConfig: s.optional(s.lazy(() => startupConfig2Schema)),
    instanceNames: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
