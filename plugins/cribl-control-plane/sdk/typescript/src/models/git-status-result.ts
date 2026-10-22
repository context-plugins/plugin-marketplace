import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { files2Schema, type Files2 } from "./files2.js";
import { gitFileRenameSchema, type GitFileRename } from "./git-file-rename.js";

export type GitStatusResult = {
  /** Number of local commits that have not been pushed to the remote repository. */
  ahead: number;
  /** Number of commits in the remote repository that have not been pulled to the local branch. */
  behind: number;
  /** Array of file paths that have merge conflicts. */
  conflicted: string[];
  /** Array of file paths for newly created files that are staged for commit. */
  created: string[];
  /** Name of the current Git branch. */
  current: string;
  /** Array of file paths for deleted files that are staged for commit. */
  deleted: string[];
  /** Array of all changed files with their index and working directory status codes. */
  files: Files2[];
  /** Array of file paths for modified files that are staged for commit. */
  modified: string[];
  /** Array of file paths that have been modified but are not staged for commit. */
  notAdded: string[];
  /** Array of file rename operations that are staged for commit. */
  renamed: GitFileRename[];
  /** Array of file paths that are staged for the next commit. */
  staged: string[];
};

export const gitStatusResultSchema: Schema<GitStatusResult> = s.object<GitStatusResult>({
  ahead: s.int(),
  behind: s.int(),
  conflicted: s.array(s.string()),
  created: s.array(s.string()),
  current: s.string(),
  deleted: s.array(s.string()),
  files: s.array(s.lazy(() => files2Schema)),
  modified: s.array(s.string()),
  notAdded: s.array(s.string()),
  renamed: s.array(s.lazy(() => gitFileRenameSchema)),
  staged: s.array(s.string()),
  _keysMap: {
    notAdded: "not_added",
  },
});
