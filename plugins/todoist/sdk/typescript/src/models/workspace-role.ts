import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Role of the user inside the workspace */
export const WorkspaceRole = {
  Admin: "ADMIN",
  Member: "MEMBER",
  Guest: "GUEST",
} as const;
export type WorkspaceRole = (typeof WorkspaceRole)[keyof typeof WorkspaceRole] | (string & {});

export const workspaceRoleSchema: EnumSchema<WorkspaceRole> = s.enumOf<WorkspaceRole>(WorkspaceRole);
