import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleViewSchema, type RoleView } from "./role-view.js";

export type RoleToActionMappingView = {
  /** Project collaborator roles and their allowed actions. */
  projectCollaboratorActions: RoleView[];
  /** Workspace collaborator roles and their allowed actions. */
  workspaceCollaboratorActions: RoleView[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const roleToActionMappingViewSchema: Schema<RoleToActionMappingView> =
  s.object<RoleToActionMappingView>(
    {
      projectCollaboratorActions: s.array(s.lazy(() => roleViewSchema)),
      workspaceCollaboratorActions: s.array(s.lazy(() => roleViewSchema)),
      _keysMap: {
        projectCollaboratorActions: "project_collaborator_actions",
        workspaceCollaboratorActions: "workspace_collaborator_actions",
      },
    },
    { additionalProperties: s.json() },
  );
