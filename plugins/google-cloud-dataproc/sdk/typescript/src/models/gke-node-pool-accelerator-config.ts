import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool. */
export type GkeNodePoolAcceleratorConfig = {
  /** The number of accelerator cards exposed to an instance. */
  acceleratorCount?: string;
  /** The accelerator type resource namename (see GPUs on Compute Engine). */
  acceleratorType?: string;
  /**
   * Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user
   * guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
   */
  gpuPartitionSize?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gkeNodePoolAcceleratorConfigSchema: Schema<GkeNodePoolAcceleratorConfig> =
  s.object<GkeNodePoolAcceleratorConfig>(
    {
      acceleratorCount: s.optional(s.string()),
      acceleratorType: s.optional(s.string()),
      gpuPartitionSize: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
