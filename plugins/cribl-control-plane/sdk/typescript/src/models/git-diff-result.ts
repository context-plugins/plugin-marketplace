import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { diffFileSchema, type DiffFile } from "./diff-file.js";

export type GitDiffResult = {
  /** Diff of the file changes in the specified commit, parsed into a structured format. */
  diffJson: DiffFile[];
};

export const gitDiffResultSchema: Schema<GitDiffResult> = s.object<GitDiffResult>({
  diffJson: s.array(s.lazy(() => diffFileSchema)),
});
