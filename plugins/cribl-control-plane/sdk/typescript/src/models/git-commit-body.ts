import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GitCommitBody = {
  /**
   * If <code>true</code>, apply the commit to the group's effective configuration. Requires a group
   * context.
   */
  effective?: boolean;
  /**
   * Array of file paths to include in the commit, relative to the configuration root. If omitted,
   * all pending changes are committed.
   */
  files?: string[];
  /** Commit message to use for the new Git commit. */
  message: string;
};

export const gitCommitBodySchema: Schema<GitCommitBody> = s.object<GitCommitBody>({
  effective: s.optional(s.boolean()),
  files: s.optional(s.array(s.string())),
  message: s.string(),
});
