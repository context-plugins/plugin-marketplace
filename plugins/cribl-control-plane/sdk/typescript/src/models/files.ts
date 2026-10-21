import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gitFileRenameSchema, type GitFileRename } from "./git-file-rename.js";

/** Files affected by the commit, grouped by change type. */
export type Files = {
  /** Array of file paths that were created in the commit. */
  created?: string[];
  /** Array of file paths that were deleted in the commit. */
  deleted?: string[];
  /** Array of file paths that were modified in the commit. */
  modified?: string[];
  /** Array of file rename operations, each containing the original path and the new path. */
  renamed?: GitFileRename[];
};

export const filesSchema: Schema<Files> = s.object<Files>({
  created: s.optional(s.array(s.string())),
  deleted: s.optional(s.array(s.string())),
  modified: s.optional(s.array(s.string())),
  renamed: s.optional(s.array(s.lazy(() => gitFileRenameSchema))),
});
