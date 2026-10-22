import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gitCommitSummarySchema, type GitCommitSummary } from "./git-commit-summary.js";

export type CountedGitCommitSummary = {
  /** Number of items returned in the items array. */
  count: number;
  /** The list of items returned in this response. */
  items: GitCommitSummary[];
};

export const countedGitCommitSummarySchema: Schema<CountedGitCommitSummary> =
  s.object<CountedGitCommitSummary>({
    count: s.int(),
    items: s.array(s.lazy(() => gitCommitSummarySchema)),
  });
