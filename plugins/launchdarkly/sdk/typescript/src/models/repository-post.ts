import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./type3.js";

export type RepositoryPost = {
  /** The repository name */
  name: string;
  /** A URL to access the repository */
  sourceLink?: string;
  /** A template for constructing a valid URL to view the commit */
  commitUrlTemplate?: string;
  /** A template for constructing a valid URL to view the hunk */
  hunkUrlTemplate?: string;
  /** The type of repository. If not specified, the default value is <code>custom</code>. */
  type?: Type3;
  /** The repository's default branch. If not specified, the default value is <code>main</code>. */
  defaultBranch?: string;
};

export const repositoryPostSchema: Schema<RepositoryPost> = s.object<RepositoryPost>({
  name: s.string(),
  sourceLink: s.optional(s.string()),
  commitUrlTemplate: s.optional(s.string()),
  hunkUrlTemplate: s.optional(s.string()),
  type: s.optional(s.lazy(() => type3Schema)),
  defaultBranch: s.optional(s.string()),
});
