import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Role assigned to the API Credential on the Workspace. */
export const WorkspaceRole = {
  Owner: "owner",
  Admin: "admin",
  User: "user",
  Noaccess: "noaccess",
} as const;
export type WorkspaceRole = (typeof WorkspaceRole)[keyof typeof WorkspaceRole] | (string & {});

export const workspaceRoleSchema: EnumSchema<WorkspaceRole> = s.enumOf<WorkspaceRole>(WorkspaceRole);
