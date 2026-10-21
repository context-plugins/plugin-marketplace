import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GitFileRename = {
  /** Original file path before the rename. */
  from: string;
  /** New file path after the rename. */
  to: string;
};

export const gitFileRenameSchema: Schema<GitFileRename> = s.object<GitFileRename>({
  from: s.string(),
  to: s.string(),
});
