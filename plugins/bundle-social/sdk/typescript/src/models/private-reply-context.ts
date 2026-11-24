import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PrivateReplyContext = {
  fetchedCommentId: string;
  externalCommentId?: string | null;
  text?: string | null;
  authorName?: string | null;
  authorAvatarUrl?: string | null;
  publishedAt?: Date | null;
  postId?: string | null;
  externalPostId?: string | null;
  postPermalink?: string | null;
  postThumbnailUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const privateReplyContextSchema: Schema<PrivateReplyContext> = s.object<PrivateReplyContext>(
  {
    fetchedCommentId: s.string(),
    externalCommentId: s.optionalNullable(s.string()),
    text: s.optionalNullable(s.string()),
    authorName: s.optionalNullable(s.string()),
    authorAvatarUrl: s.optionalNullable(s.string()),
    publishedAt: s.optionalNullable(s.dateTime()),
    postId: s.optionalNullable(s.string()),
    externalPostId: s.optionalNullable(s.string()),
    postPermalink: s.optionalNullable(s.string()),
    postThumbnailUrl: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
