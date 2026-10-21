import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current state of the Workspace. */
export const WorkspaceState = {
  Provisioning: "Provisioning",
  Active: "Active",
  Inactive: "Inactive",
  Failed: "Failed",
  Deprovisioning: "Deprovisioning",
} as const;
export type WorkspaceState = (typeof WorkspaceState)[keyof typeof WorkspaceState] | (string & {});

export const workspaceStateSchema: EnumSchema<WorkspaceState> = s.enumOf<WorkspaceState>(WorkspaceState);
