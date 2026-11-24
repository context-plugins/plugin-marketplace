import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The permission level the authenticated user has on this base. */
export const PermissionLevel = {
  None: "none",
  Read: "read",
  Comment: "comment",
  Edit: "edit",
  Create: "create",
} as const;
export type PermissionLevel = (typeof PermissionLevel)[keyof typeof PermissionLevel] | (string & {});

export const permissionLevelSchema: EnumSchema<PermissionLevel> = s.enumOf<PermissionLevel>(PermissionLevel);
