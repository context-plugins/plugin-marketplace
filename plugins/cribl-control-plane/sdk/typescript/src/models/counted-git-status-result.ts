import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gitStatusResultSchema, type GitStatusResult } from "./git-status-result.js";

export type CountedGitStatusResult = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: GitStatusResult[];
};

export const countedGitStatusResultSchema: Schema<CountedGitStatusResult> = s.object<CountedGitStatusResult>({
  count: s.int(),
  items: s.array(s.lazy(() => gitStatusResultSchema)),
});
