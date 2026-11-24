import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectSourceVersion = {
  /**
   * An identifier for a source in the build project. The identifier can only contain alphanumeric
   * characters and underscores, and must be less than 128 characters in length.
   */
  sourceIdentifier: string;
  /**
   * The source version for the corresponding source identifier. If specified, must be one of: For
   * CodeCommit: the commit ID, branch, or Git tag to use. For GitHub: the commit ID, pull request
   * ID, branch name, or tag name that corresponds to the version of the source code you want to
   * build. If a pull request ID is specified, it must use the format pr/pull-request-ID (for
   * example, pr/25). If a branch name is specified, the branch's HEAD commit ID is used. If not
   * specified, the default branch's HEAD commit ID is used. For GitLab: the commit ID, branch, or
   * Git tag to use. For Bitbucket: the commit ID,
   */
  sourceVersion: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectSourceVersionSchema: Schema<ProjectSourceVersion> = s.object<ProjectSourceVersion>(
  {
    sourceIdentifier: s.string(),
    sourceVersion: s.string(),
  },
  { additionalProperties: s.json() },
);
