import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gitFileSchema, type GitFile } from "./git-file.js";

export type GitFilesResponse = {
  /** Commit message of the specified commit. */
  commitMessage?: string;
  /** Number of files returned. */
  count: number;
  /** Array of files that changed since the specified commit. */
  items: GitFile[];
};

export const gitFilesResponseSchema: Schema<GitFilesResponse> = s.object<GitFilesResponse>({
  commitMessage: s.optional(s.string()),
  count: s.int(),
  items: s.array(s.lazy(() => gitFileSchema)),
});
