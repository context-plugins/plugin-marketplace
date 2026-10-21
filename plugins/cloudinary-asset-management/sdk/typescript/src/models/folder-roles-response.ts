import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderRoleAssignmentSchema, type FolderRoleAssignment } from "./folder-role-assignment.js";
import { permittedRoleSchema, type PermittedRole } from "./permitted-role.js";

export type FolderRolesResponse = {
  /**
   * An array of principals (users, groups, or API keys) with their role assignments on this folder,
   * including roles inherited from ancestor folders.
   */
  sharedWith?: FolderRoleAssignment[];
  /**
   * The roles the authenticated user can assign on this folder. Users can assign only roles at or
   * below their own permission level for this folder. Returned only when `include_assignable_roles`
   * is true.
   */
  permittedRoles?: PermittedRole[];
};

export const folderRolesResponseSchema: Schema<FolderRolesResponse> = s.object<FolderRolesResponse>({
  sharedWith: s.optional(s.array(s.lazy(() => folderRoleAssignmentSchema))),
  permittedRoles: s.optional(s.array(s.lazy(() => permittedRoleSchema))),
  _keysMap: {
    sharedWith: "shared_with",
    permittedRoles: "permitted_roles",
  },
});
