import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GitRevertParams = {
  /** SHA-1 hash of the commit to revert. */
  commit: string;
  /**
   * If <code>true</code>, force the revert even when the working directory is not clean. Otherwise,
   * <code>false</code>.
   */
  force?: boolean;
  /** Custom message to use for the revert commit. If omitted, a default message is generated. */
  message?: string;
};

export const gitRevertParamsSchema: Schema<GitRevertParams> = s.object<GitRevertParams>({
  commit: s.string(),
  force: s.optional(s.boolean()),
  message: s.optional(s.string()),
});
