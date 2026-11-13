import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ProjectSortPreference, projectSortPreferenceSchema } from "./project-sort-preference.js";
import { WorkspaceRole, workspaceRoleSchema } from "./workspace-role.js";

export type WorkspaceUserView = {
  /** String ID of the workspace user. */
  userId: string;
  /** String ID of the workspace. */
  workspaceId: string;
  /** Workspace role assigned to the user. @default WorkspaceRole.Member */
  role?: WorkspaceRole;
  /** Whether the user has custom project sorting enabled. @default false */
  customSortingApplied?: boolean;
  /** Project sorting preference for the user. @default ProjectSortPreference.Manual */
  projectSortPreference?: ProjectSortPreference;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceUserViewSchema: Schema<WorkspaceUserView> = s.object<WorkspaceUserView>(
  {
    userId: s.string(),
    workspaceId: s.string(),
    role: s.defaulted(workspaceRoleSchema, WorkspaceRole.Member),
    customSortingApplied: s.defaulted(s.boolean(), false),
    projectSortPreference: s.defaulted(projectSortPreferenceSchema, ProjectSortPreference.Manual),
    _keysMap: {
      userId: "user_id",
      workspaceId: "workspace_id",
      customSortingApplied: "custom_sorting_applied",
      projectSortPreference: "project_sort_preference",
    },
  },
  { additionalProperties: s.json() },
);
