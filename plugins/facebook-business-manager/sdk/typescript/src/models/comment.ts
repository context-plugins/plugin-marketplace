import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fromSchema, type From } from "./from.js";

export type Comment = {
  /** The ID of the comment */
  id?: string;
  /** The text content of the comment */
  message?: string;
  /** The person or Page that made the comment */
  from?: From;
  /** When the comment was created */
  createdTime?: Date;
  /** Number of likes on the comment */
  likeCount?: number;
  /** Number of replies to the comment */
  commentCount?: number;
  /** Whether the comment is hidden */
  isHidden?: boolean;
  /** Media attachment on the comment */
  attachment?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commentSchema: Schema<Comment> = s.object<Comment>(
  {
    id: s.optional(s.string()),
    message: s.optional(s.string()),
    from: s.optional(s.lazy(() => fromSchema)),
    createdTime: s.optional(s.dateTime()),
    likeCount: s.optional(s.int()),
    commentCount: s.optional(s.int()),
    isHidden: s.optional(s.boolean()),
    attachment: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      createdTime: "created_time",
      likeCount: "like_count",
      commentCount: "comment_count",
      isHidden: "is_hidden",
    },
  },
  { additionalProperties: s.json() },
);
