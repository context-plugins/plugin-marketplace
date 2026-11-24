import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscMastodonCommentRequest = {
  teamId: string;
  /** The ID of the comment in bundle.social */
  commentId: string;
  /** The updated comment text */
  text: string;
  /** The updated spoiler/content warning text */
  spoilerText?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscMastodonCommentRequestProperties: s.Shape<ApiV1MiscMastodonCommentRequest> = {
  teamId: s.string(),
  commentId: s.string(),
  text: s.string(),
  spoilerText: s.optional(s.string()),
};

export const apiV1MiscMastodonCommentRequestInternalSchema: Schema<ApiV1MiscMastodonCommentRequest> =
  s.object<ApiV1MiscMastodonCommentRequest>(apiV1MiscMastodonCommentRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscMastodonCommentRequestSchema: Schema<ApiV1MiscMastodonCommentRequest> = s.lazySchema(
  () =>
    s.object<ApiV1MiscMastodonCommentRequest>(
      {
        ...apiV1MiscMastodonCommentRequestProperties,
        text: s.string().check(s.minLength(1), s.maxLength(500)),
        spoilerText: s.optional(s.string().check(s.maxLength(500))),
      },
      { additionalProperties: s.json() },
    ),
);
