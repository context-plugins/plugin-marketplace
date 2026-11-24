import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscFacebookRecommendationsCommentsReplyRequest = {
  teamId: string;
  comment: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscFacebookRecommendationsCommentsReplyRequestProperties: s.Shape<ApiV1MiscFacebookRecommendationsCommentsReplyRequest> =
  {
    teamId: s.string(),
    comment: s.string(),
  };

export const apiV1MiscFacebookRecommendationsCommentsReplyRequestInternalSchema: Schema<ApiV1MiscFacebookRecommendationsCommentsReplyRequest> =
  s.object<ApiV1MiscFacebookRecommendationsCommentsReplyRequest>(
    apiV1MiscFacebookRecommendationsCommentsReplyRequestProperties,
    { additionalProperties: s.json() },
  );

export const apiV1MiscFacebookRecommendationsCommentsReplyRequestSchema: Schema<ApiV1MiscFacebookRecommendationsCommentsReplyRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscFacebookRecommendationsCommentsReplyRequest>(
      {
        ...apiV1MiscFacebookRecommendationsCommentsReplyRequestProperties,
        comment: s.string().check(s.minLength(1), s.maxLength(4096)),
      },
      { additionalProperties: s.json() },
    ),
  );
