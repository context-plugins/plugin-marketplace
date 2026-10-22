import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gitDiffResultSchema, type GitDiffResult } from "./git-diff-result.js";

export type CountedGitDiffResult = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: GitDiffResult[];
};

export const countedGitDiffResultSchema: Schema<CountedGitDiffResult> = s.object<CountedGitDiffResult>({
  count: s.int(),
  items: s.array(s.lazy(() => gitDiffResultSchema)),
});
