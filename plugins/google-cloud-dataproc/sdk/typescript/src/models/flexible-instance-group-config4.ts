import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { hardwareClassSchema, type HardwareClass } from "./hardware-class.js";

/**
 * Optional. The High Obtainability (HO) config settings for the cluster's worker instances.In High
 * Obtainability (HO) mode, flexible configs are the single source of truth for desired cluster
 * configuration. num_instances represents the desired capacity of the worker group and is mutable
 * via cluster updates and autoscaling.Only one of worker_config or worker_flexible_config can be
 * set.In High Obtainability (HO) mode, for multi-node (standard) clusters, both
 * master_flexible_config and worker_flexible_config must be specified. Mixing standard and flexible
 * configs across node groups is not allowed. Single-node clusters do not specify worker configs.
 */
export type FlexibleInstanceGroupConfig4 = {
  /**
   * Optional. The boot disk size in GB. This is a create-time specification and is not currently
   * mutable via update masks.
   */
  bootDiskSizeGb?: number;
  /**
   * Optional. The number of vCPUs per instance. Must be a power of 2 (2, 4, 8, 16, 32). This is a
   * create-time specification and is not currently mutable via update masks.
   */
  coreCount?: number;
  /**
   * Optional. The hardware class of the instances. This is a create-time specification and is not
   * currently mutable via update masks.
   */
  hardwareClass?: HardwareClass;
  /**
   * Optional. The number of VM instances requested.For master instances, this must be 1. For worker
   * and secondary worker instances, this represents the desired capacity of the group and is
   * mutable via cluster update operations and autoscaling.
   */
  numInstances?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flexibleInstanceGroupConfig4Schema: Schema<FlexibleInstanceGroupConfig4> =
  s.object<FlexibleInstanceGroupConfig4>(
    {
      bootDiskSizeGb: s.optional(s.int()),
      coreCount: s.optional(s.int()),
      hardwareClass: s.optional(s.lazy(() => hardwareClassSchema)),
      numInstances: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
