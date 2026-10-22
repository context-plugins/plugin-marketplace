import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GitFile = {
  /**
   * If <code>true</code>, this file is automatically included in commits without being explicitly
   * listed. Otherwise, <code>false</code>.
   */
  autoIncludedInCommit?: boolean;
  /**
   * When this entry is a directory, nested files and subdirectories. Each array element matches
   * this same object shape (recursive file tree).
   */
  children?: GitFile[];
  /** Path of the file relative to the configuration root. */
  name: string;
  /**
   * Git status code for the file: <code>M</code> for modified, <code>A</code> for added, or
   * <code>D</code> for deleted.
   */
  state?: string;
};

export const gitFileSchema: Schema<GitFile> = s.object<GitFile>({
  autoIncludedInCommit: s.optional(s.boolean()),
  children: s.optional(s.array(s.lazy(() => gitFileSchema))),
  name: s.string(),
  state: s.optional(s.string()),
});
