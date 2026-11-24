import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaskDeviceOs = {
  Windows: "WINDOWS",
  Macos: "MACOS",
  Linux: "LINUX",
} as const;
export type TaskDeviceOs = (typeof TaskDeviceOs)[keyof typeof TaskDeviceOs] | (string & {});

export const taskDeviceOsSchema: EnumSchema<TaskDeviceOs> = s.enumOf<TaskDeviceOs>(TaskDeviceOs);
