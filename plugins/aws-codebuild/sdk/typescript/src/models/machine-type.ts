import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The machine type of the instance type included in your fleet. */
export const MachineType = {
  General: "GENERAL",
  Nvme: "NVME",
} as const;
export type MachineType = (typeof MachineType)[keyof typeof MachineType] | (string & {});

export const machineTypeSchema: EnumSchema<MachineType> = s.enumOf<MachineType>(MachineType);
