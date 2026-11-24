import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscLinkedinCommentRequest = {
  teamId: string;
  /** The ID of the comment in bundle.social */
  commentId: string;
  /** The updated comment text */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscLinkedinCommentRequestProperties: s.Shape<ApiV1MiscLinkedinCommentRequest> = {
  teamId: s.string(),
  commentId: s.string(),
  text: s.string(),
};

export const apiV1MiscLinkedinCommentRequestInternalSchema: Schema<ApiV1MiscLinkedinCommentRequest> =
  s.object<ApiV1MiscLinkedinCommentRequest>(apiV1MiscLinkedinCommentRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscLinkedinCommentRequestSchema: Schema<ApiV1MiscLinkedinCommentRequest> = s.lazySchema(
  () =>
    s.object<ApiV1MiscLinkedinCommentRequest>(
      {
        ...apiV1MiscLinkedinCommentRequestProperties,
        text: s.string().check(s.minLength(1), s.maxLength(1250)),
      },
      { additionalProperties: s.json() },
    ),
);
