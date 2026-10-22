import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { diffFileSchema, type DiffFile } from "./diff-file.js";

export type GitShowResult = {
  /** Full commit message of the specified commit. */
  commitMessage: string;
  /** Diff of the file changes introduced by the commit. */
  diffJson: DiffFile[];
};

export const gitShowResultSchema: Schema<GitShowResult> = s.object<GitShowResult>({
  commitMessage: s.string(),
  diffJson: s.array(s.lazy(() => diffFileSchema)),
});
