import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Role = {
  RoleUnspecified: "ROLE_UNSPECIFIED",
  Default: "DEFAULT",
  Controller: "CONTROLLER",
  SparkDriver: "SPARK_DRIVER",
  SparkExecutor: "SPARK_EXECUTOR",
} as const;
export type Role = (typeof Role)[keyof typeof Role] | (string & {});

export const roleSchema: EnumSchema<Role> = s.enumOf<Role>(Role);
