import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the environment. */
export const StatusContentstackEnvironmentsApi = {
  Active: "active",
  Inactive: "inactive",
  Deploying: "deploying",
} as const;
export type StatusContentstackEnvironmentsApi =
  | (typeof StatusContentstackEnvironmentsApi)[keyof typeof StatusContentstackEnvironmentsApi]
  | (string & {});

export const statusContentstackEnvironmentsApiSchema: EnumSchema<StatusContentstackEnvironmentsApi> =
  s.enumOf<StatusContentstackEnvironmentsApi>(StatusContentstackEnvironmentsApi);
