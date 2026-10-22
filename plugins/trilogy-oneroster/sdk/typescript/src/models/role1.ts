import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Role1 = {
  Administrator: "administrator",
  Proctor: "proctor",
  Student: "student",
  Teacher: "teacher",
} as const;
export type Role1 = (typeof Role1)[keyof typeof Role1] | (string & {});

export const role1Schema: EnumSchema<Role1> = s.enumOf<Role1>(Role1);
