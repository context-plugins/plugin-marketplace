import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The result of renaming or moving a folder. */
export type FolderRenameResponse = {
  /** Whether the source folder was deleted after the move. */
  folderDeleted?: boolean;
  /** The number of assets successfully moved. */
  moved?: number;
  /** The number of assets rejected during the move. */
  rejected?: number;
  /** The number of assets that failed to move. */
  failed?: number;
};

export const folderRenameResponseSchema: Schema<FolderRenameResponse> = s.object<FolderRenameResponse>({
  folderDeleted: s.optional(s.boolean()),
  moved: s.optional(s.int()),
  rejected: s.optional(s.int()),
  failed: s.optional(s.int()),
  _keysMap: {
    folderDeleted: "folder_deleted",
  },
});
