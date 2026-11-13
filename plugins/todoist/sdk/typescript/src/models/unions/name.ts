import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { collaboratorRoleSchema, type CollaboratorRole } from "../collaborator-role.js";
import { workspaceRoleSchema, type WorkspaceRole } from "../workspace-role.js";

/** Role that grants the listed actions. */
export type Name = CollaboratorRole | WorkspaceRole;

export const nameSchema: Schema<Name> = s.of<Name>(
  s.union([s.lazy(() => collaboratorRoleSchema), s.lazy(() => workspaceRoleSchema)]),
);
