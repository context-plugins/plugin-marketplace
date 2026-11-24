import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Comment = {
  id: string;
  recommendationId: string;
  rootObjectId: string;
  parentCommentId?: string | null;
  authorName?: string | null;
  authorExternalId?: string | null;
  authorAvatarUrl?: string | null;
  text?: string | null;
  likesCount: number;
  repliesCount: number;
  canReply?: boolean | null;
  createdTime?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commentSchema: Schema<Comment> = s.object<Comment>(
  {
    id: s.string(),
    recommendationId: s.string(),
    rootObjectId: s.string(),
    parentCommentId: s.optionalNullable(s.string()),
    authorName: s.optionalNullable(s.string()),
    authorExternalId: s.optionalNullable(s.string()),
    authorAvatarUrl: s.optionalNullable(s.string()),
    text: s.optionalNullable(s.string()),
    likesCount: s.float64(),
    repliesCount: s.float64(),
    canReply: s.optionalNullable(s.boolean()),
    createdTime: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
