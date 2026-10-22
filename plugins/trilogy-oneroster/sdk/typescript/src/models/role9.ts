import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Role9 = {
  Administrator: "administrator",
  Aide: "aide",
  Guardian: "guardian",
  Parent: "parent",
  Proctor: "proctor",
  Relative: "relative",
  Student: "student",
  Teacher: "teacher",
} as const;
export type Role9 = (typeof Role9)[keyof typeof Role9] | (string & {});

export const role9Schema: EnumSchema<Role9> = s.enumOf<Role9>(Role9);
