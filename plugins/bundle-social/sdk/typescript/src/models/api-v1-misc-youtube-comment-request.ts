import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscYoutubeCommentRequest = {
  teamId: string;
  /** The ID of the comment in bundle.social */
  commentId: string;
  /** The updated comment text */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscYoutubeCommentRequestProperties: s.Shape<ApiV1MiscYoutubeCommentRequest> = {
  teamId: s.string(),
  commentId: s.string(),
  text: s.string(),
};

export const apiV1MiscYoutubeCommentRequestInternalSchema: Schema<ApiV1MiscYoutubeCommentRequest> =
  s.object<ApiV1MiscYoutubeCommentRequest>(apiV1MiscYoutubeCommentRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscYoutubeCommentRequestSchema: Schema<ApiV1MiscYoutubeCommentRequest> = s.lazySchema(() =>
  s.object<ApiV1MiscYoutubeCommentRequest>(
    {
      ...apiV1MiscYoutubeCommentRequestProperties,
      text: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
