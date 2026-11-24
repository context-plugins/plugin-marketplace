import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Defines a mapping from machine types to the number of VMs that are created with each machine
 * type.
 */
export type InstanceSelectionResult = {
  /** Output only. Full machine-type names, e.g. "n1-standard-16". */
  machineType?: string;
  /** Output only. Number of VM provisioned with the machine_type. */
  vmCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instanceSelectionResultSchema: Schema<InstanceSelectionResult> =
  s.object<InstanceSelectionResult>(
    {
      machineType: s.optional(s.string()),
      vmCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
