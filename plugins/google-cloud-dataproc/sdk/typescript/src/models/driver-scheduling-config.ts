import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Driver scheduling configuration. */
export type DriverSchedulingConfig = {
  /** Required. The amount of memory in MB the driver is requesting. */
  memoryMb?: number;
  /** Required. The number of vCPUs the driver is requesting. */
  vcores?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const driverSchedulingConfigSchema: Schema<DriverSchedulingConfig> = s.object<DriverSchedulingConfig>(
  {
    memoryMb: s.optional(s.int()),
    vcores: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
