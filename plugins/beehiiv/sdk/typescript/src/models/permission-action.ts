import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PermissionAction = {
  Read: "read",
  Write: "write",
} as const;
export type PermissionAction = (typeof PermissionAction)[keyof typeof PermissionAction] | (string & {});

export const permissionActionSchema: EnumSchema<PermissionAction> =
  s.enumOf<PermissionAction>(PermissionAction);
