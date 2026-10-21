import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { productRoleSchemaSchema, type ProductRoleSchema } from "./product-role-schema.js";
import { workspaceRoleSchema, type WorkspaceRole } from "./workspace-role.js";

export type WorkspaceRoleSchema = {
  /** Unique ID of the Workspace. */
  workspaceId: string;
  /** Role assigned to the API Credential on the Workspace. */
  workspaceRole: WorkspaceRole;
  /** Product-level Roles assigned to the API Credential for the Workspace. */
  products?: ProductRoleSchema[];
};

export const workspaceRoleSchemaSchema: Schema<WorkspaceRoleSchema> = s.object<WorkspaceRoleSchema>({
  workspaceId: s.string(),
  workspaceRole: workspaceRoleSchema,
  products: s.optional(s.array(s.lazy(() => productRoleSchemaSchema))),
});
