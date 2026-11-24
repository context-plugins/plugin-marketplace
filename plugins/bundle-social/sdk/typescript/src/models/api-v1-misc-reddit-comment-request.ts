import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscRedditCommentRequest = {
  teamId: string;
  /** The ID of the comment in bundle.social */
  commentId: string;
  /** The updated comment text */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscRedditCommentRequestProperties: s.Shape<ApiV1MiscRedditCommentRequest> = {
  teamId: s.string(),
  commentId: s.string(),
  text: s.string(),
};

export const apiV1MiscRedditCommentRequestInternalSchema: Schema<ApiV1MiscRedditCommentRequest> =
  s.object<ApiV1MiscRedditCommentRequest>(apiV1MiscRedditCommentRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscRedditCommentRequestSchema: Schema<ApiV1MiscRedditCommentRequest> = s.lazySchema(() =>
  s.object<ApiV1MiscRedditCommentRequest>(
    {
      ...apiV1MiscRedditCommentRequestProperties,
      text: s.string().check(s.minLength(1), s.maxLength(10000)),
    },
    { additionalProperties: s.json() },
  ),
);
