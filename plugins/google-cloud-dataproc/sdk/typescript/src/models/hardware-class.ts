import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The hardware class of the instances. This is a create-time specification and is not
 * currently mutable via update masks.
 */
export const HardwareClass = {
  HardwareClassUnspecified: "HARDWARE_CLASS_UNSPECIFIED",
  Standard: "STANDARD",
  Performance: "PERFORMANCE",
} as const;
export type HardwareClass = (typeof HardwareClass)[keyof typeof HardwareClass] | (string & {});

export const hardwareClassSchema: EnumSchema<HardwareClass> = s.enumOf<HardwareClass>(HardwareClass);
