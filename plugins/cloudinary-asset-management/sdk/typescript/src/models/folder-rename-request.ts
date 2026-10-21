import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The source and destination folder paths. */
export type FolderRenameRequest = {
  /** The full path of the folder to rename or move. */
  path: string;
  /** The new full path for the folder. */
  toPath: string;
  /**
   * The maximum number of assets that may be moved by the rename. Assets beyond this limit cause
   * the rename to be rejected.
   */
  resourcesLimit?: number;
  /** The maximum total size, in bytes, of the assets that may be moved by the rename. */
  resourcesSizeLimit?: number;
  /** The maximum number of derived assets that may be moved by the rename. */
  maxDerived?: number;
};

export const folderRenameRequestSchema: Schema<FolderRenameRequest> = s.object<FolderRenameRequest>({
  path: s.string(),
  toPath: s.string(),
  resourcesLimit: s.optional(s.int()),
  resourcesSizeLimit: s.optional(s.int()),
  maxDerived: s.optional(s.int()),
  _keysMap: {
    toPath: "to_path",
    resourcesLimit: "resources_limit",
    resourcesSizeLimit: "resources_size_limit",
    maxDerived: "max_derived",
  },
});
