import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Specifies the type and number of accelerator cards attached to the instances of an instance. See
 * GPUs on Compute Engine (https://cloud.google.com/compute/docs/gpus/).
 */
export type AcceleratorConfig = {
  /**
   * Full URL, partial URI, or short name of the accelerator type resource to expose to this
   * instance. See Compute Engine AcceleratorTypes
   * (https://cloud.google.com/compute/docs/reference/v1/acceleratorTypes).Examples:
   * https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4
   * projects/[project_id]/zones/[zone]/acceleratorTypes/nvidia-tesla-t4 nvidia-tesla-t4Auto Zone
   * Exception: If you are using Auto Zone Placement
   * (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement),
   * you must use the short name of the accelerator type resource, for example, nvidia-tesla-t4.
   */
  acceleratorTypeUri?: string;
  /** The number of the accelerator cards of this type exposed to this instance. */
  acceleratorCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const acceleratorConfigSchema: Schema<AcceleratorConfig> = s.object<AcceleratorConfig>(
  {
    acceleratorTypeUri: s.optional(s.string()),
    acceleratorCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
