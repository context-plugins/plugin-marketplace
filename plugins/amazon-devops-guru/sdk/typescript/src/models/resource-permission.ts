import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The permission status of a resource. */
export const ResourcePermission = {
  FullPermission: "FULL_PERMISSION",
  MissingPermission: "MISSING_PERMISSION",
} as const;
export type ResourcePermission = (typeof ResourcePermission)[keyof typeof ResourcePermission] | (string & {});

export const resourcePermissionSchema: EnumSchema<ResourcePermission> =
  s.enumOf<ResourcePermission>(ResourcePermission);
