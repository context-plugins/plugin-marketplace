import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether the user has full access to the project or has comment-only access. */
export const WriteAccess = {
  FullWrite: "full_write",
  CommentOnly: "comment_only",
} as const;
export type WriteAccess = (typeof WriteAccess)[keyof typeof WriteAccess] | (string & {});

export const writeAccessSchema: EnumSchema<WriteAccess> = s.enumOf<WriteAccess>(WriteAccess);
