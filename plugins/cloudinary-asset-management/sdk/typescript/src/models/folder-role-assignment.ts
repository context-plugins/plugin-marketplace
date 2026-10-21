import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderRoleSchema, type FolderRole } from "./folder-role.js";
import { principalTypeSchema, type PrincipalType } from "./principal-type.js";

export type FolderRoleAssignment = {
  /** The type of principal. */
  type: PrincipalType;
  /** The unique identifier of the principal. For `apiKey`, provide the API key value. */
  id: string;
  /**
   * The ID of the folder where this role assignment was defined, either the requested folder or one
   * of its ancestor folders.
   */
  folderId: string;
  /** The roles assigned to this principal for this folder. */
  roles: FolderRole[];
};

export const folderRoleAssignmentSchema: Schema<FolderRoleAssignment> = s.object<FolderRoleAssignment>({
  type: principalTypeSchema,
  id: s.string(),
  folderId: s.string(),
  roles: s.array(s.lazy(() => folderRoleSchema)),
  _keysMap: {
    folderId: "folder_id",
  },
});
