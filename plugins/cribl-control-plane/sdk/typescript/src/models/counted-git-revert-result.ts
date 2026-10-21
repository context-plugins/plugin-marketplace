import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gitRevertResultSchema, type GitRevertResult } from "./git-revert-result.js";

export type CountedGitRevertResult = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: GitRevertResult[];
};

export const countedGitRevertResultSchema: Schema<CountedGitRevertResult> = s.object<CountedGitRevertResult>({
  count: s.int(),
  items: s.array(s.lazy(() => gitRevertResultSchema)),
});
