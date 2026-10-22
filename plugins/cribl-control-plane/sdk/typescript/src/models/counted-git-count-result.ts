import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gitCountResultSchema, type GitCountResult } from "./git-count-result.js";

export type CountedGitCountResult = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: GitCountResult[];
};

export const countedGitCountResultSchema: Schema<CountedGitCountResult> = s.object<CountedGitCountResult>({
  count: s.int(),
  items: s.array(s.lazy(() => gitCountResultSchema)),
});
