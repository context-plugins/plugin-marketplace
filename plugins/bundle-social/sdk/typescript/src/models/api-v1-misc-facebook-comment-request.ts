import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscFacebookCommentRequest = {
  teamId: string;
  /** The ID of the comment in bundle.social */
  commentId: string;
  /** The updated comment text */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscFacebookCommentRequestProperties: s.Shape<ApiV1MiscFacebookCommentRequest> = {
  teamId: s.string(),
  commentId: s.string(),
  text: s.string(),
};

export const apiV1MiscFacebookCommentRequestInternalSchema: Schema<ApiV1MiscFacebookCommentRequest> =
  s.object<ApiV1MiscFacebookCommentRequest>(apiV1MiscFacebookCommentRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscFacebookCommentRequestSchema: Schema<ApiV1MiscFacebookCommentRequest> = s.lazySchema(
  () =>
    s.object<ApiV1MiscFacebookCommentRequest>(
      {
        ...apiV1MiscFacebookCommentRequestProperties,
        text: s.string().check(s.minLength(1), s.maxLength(8000)),
      },
      { additionalProperties: s.json() },
    ),
);
