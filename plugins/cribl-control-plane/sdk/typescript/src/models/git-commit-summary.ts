import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authorSchema, type Author } from "./author.js";
import { filesSchema, type Files } from "./files.js";
import { summarySchema, type Summary } from "./summary.js";

export type GitCommitSummary = {
  /** Author of the Git commit, including email and display name. */
  author?: Author;
  /** Name of the Git branch the commit was made on. */
  branch: string;
  /** Full SHA-1 hash of the new commit. */
  commit: string;
  /** Files affected by the commit, grouped by change type. */
  files?: Files;
  /** Summary of line changes in the commit. */
  summary: Summary;
};

export const gitCommitSummarySchema: Schema<GitCommitSummary> = s.object<GitCommitSummary>({
  author: s.optional(s.lazy(() => authorSchema)),
  branch: s.string(),
  commit: s.string(),
  files: s.optional(s.lazy(() => filesSchema)),
  summary: summarySchema,
});
