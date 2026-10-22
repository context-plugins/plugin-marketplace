import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Commit = {
  /** Email address of the commit author. */
  authorEmail?: string;
  /** Name of the commit author. */
  authorName?: string;
  /** Body of the commit message (all lines after the subject), if any. */
  body?: string;
  /** Date and time of the commit. */
  date: string;
  /** Full commit hash. */
  hash: string;
  /** Commit message. */
  message: string;
  /** Abbreviated commit hash. */
  short: string;
};

export const commitSchema: Schema<Commit> = s.object<Commit>({
  authorEmail: s.optional(s.string()),
  authorName: s.optional(s.string()),
  body: s.optional(s.string()),
  date: s.string(),
  hash: s.string(),
  message: s.string(),
  short: s.string(),
  _keysMap: {
    authorEmail: "author_email",
    authorName: "author_name",
  },
});
