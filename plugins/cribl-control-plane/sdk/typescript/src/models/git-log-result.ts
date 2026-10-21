import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GitLogResult = {
  /** Email address of the commit author. */
  authorEmail?: string;
  /** Display name of the commit author. */
  authorName?: string;
  /** Body of the commit message, excluding the subject line. */
  body?: string;
  /** Date and time of the commit in ISO 8601 format with timezone offset. */
  date?: string;
  /** Full SHA-1 hash of the commit. */
  hash?: string;
  /** First line of the commit message (the subject). */
  message?: string;
  /** Git refs (branches, tags) pointing to this commit. */
  refs?: string;
};

export const gitLogResultSchema: Schema<GitLogResult> = s.object<GitLogResult>({
  authorEmail: s.optional(s.string()),
  authorName: s.optional(s.string()),
  body: s.optional(s.string()),
  date: s.optional(s.string()),
  hash: s.optional(s.string()),
  message: s.optional(s.string()),
  refs: s.optional(s.string()),
  _keysMap: {
    authorEmail: "author_email",
    authorName: "author_name",
  },
});
