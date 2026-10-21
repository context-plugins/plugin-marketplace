import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FolderRole = {
  /** The unique identifier of the role. */
  id: string;
  /** The human-readable name of the role. */
  name: string;
  /** A summary of the permissions granted by this role. */
  description: string;
  /**
   * Indicates whether this role is inherited from an ancestor folder. If false, it's assigned
   * directly to the requested folder.
   */
  inherited: boolean;
};

export const folderRoleSchema: Schema<FolderRole> = s.object<FolderRole>({
  id: s.string(),
  name: s.string(),
  description: s.string(),
  inherited: s.boolean(),
});
