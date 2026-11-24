import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Comment = {
  id?: string;
  text?: string;
  username?: string;
  timestamp?: Date;
  likeCount?: number;
  hidden?: boolean;
  /** ID of the parent comment if this is a reply. */
  parentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commentSchema: Schema<Comment> = s.object<Comment>(
  {
    id: s.optional(s.string()),
    text: s.optional(s.string()),
    username: s.optional(s.string()),
    timestamp: s.optional(s.dateTime()),
    likeCount: s.optional(s.int()),
    hidden: s.optional(s.boolean()),
    parentId: s.optional(s.string()),
    _keysMap: {
      likeCount: "like_count",
      parentId: "parent_id",
    },
  },
  { additionalProperties: s.json() },
);
