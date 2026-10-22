import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gitShowResultSchema, type GitShowResult } from "./git-show-result.js";

export type CountedGitShowResult = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: GitShowResult[];
};

export const countedGitShowResultSchema: Schema<CountedGitShowResult> = s.object<CountedGitShowResult>({
  count: s.int(),
  items: s.array(s.lazy(() => gitShowResultSchema)),
});
