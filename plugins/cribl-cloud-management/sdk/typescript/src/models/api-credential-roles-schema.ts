import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { organizationRoleSchema, type OrganizationRole } from "./organization-role.js";
import { workspaceRoleSchemaSchema, type WorkspaceRoleSchema } from "./workspace-role-schema.js";

export type ApiCredentialRolesSchema = {
  /** Organization-level Role assigned to the API Credential. */
  organizationRole: OrganizationRole;
  /** Workspace-level Roles assigned to the API Credential. */
  workspaces?: WorkspaceRoleSchema[];
};

export const apiCredentialRolesSchemaSchema: Schema<ApiCredentialRolesSchema> =
  s.object<ApiCredentialRolesSchema>({
    organizationRole: organizationRoleSchema,
    workspaces: s.optional(s.array(s.lazy(() => workspaceRoleSchemaSchema))),
  });
