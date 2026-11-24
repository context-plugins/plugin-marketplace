import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** When to schedule the installation */
export const Schedule = {
  CurrentVersion: "Current version",
  NextMinorVersion: "Next minor version",
  NextMajorVersion: "Next major version",
} as const;
export type Schedule = (typeof Schedule)[keyof typeof Schedule] | (string & {});

export const scheduleSchema: EnumSchema<Schedule> = s.enumOf<Schedule>(Schedule);
