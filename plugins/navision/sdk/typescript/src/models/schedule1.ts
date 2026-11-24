import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Schedule1 = {
  CurrentVersion: "Current version",
  NextMinorVersion: "Next minor version",
  NextMajorVersion: "Next major version",
} as const;
export type Schedule1 = (typeof Schedule1)[keyof typeof Schedule1] | (string & {});

export const schedule1Schema: EnumSchema<Schedule1> = s.enumOf<Schedule1>(Schedule1);
