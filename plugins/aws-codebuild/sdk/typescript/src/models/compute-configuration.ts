import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { machineTypeSchema, type MachineType } from "./machine-type.js";

export type ComputeConfiguration = {
  /** The number of vCPUs of the instance type included in your fleet. */
  vCpu?: number;
  /** The amount of memory of the instance type included in your fleet. */
  memory?: number;
  /** The amount of disk space of the instance type included in your fleet. */
  disk?: number;
  /** The machine type of the instance type included in your fleet. */
  machineType?: MachineType;
  /** The EC2 instance type to be launched in your fleet. */
  instanceType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const computeConfigurationSchema: Schema<ComputeConfiguration> = s.object<ComputeConfiguration>(
  {
    vCpu: s.optional(s.int()),
    memory: s.optional(s.int()),
    disk: s.optional(s.int()),
    machineType: s.optional(s.lazy(() => machineTypeSchema)),
    instanceType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
