import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscFacebookRecommendationsReplyRequest = {
  teamId: string;
  comment: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscFacebookRecommendationsReplyRequestProperties: s.Shape<ApiV1MiscFacebookRecommendationsReplyRequest> =
  {
    teamId: s.string(),
    comment: s.string(),
  };

export const apiV1MiscFacebookRecommendationsReplyRequestInternalSchema: Schema<ApiV1MiscFacebookRecommendationsReplyRequest> =
  s.object<ApiV1MiscFacebookRecommendationsReplyRequest>(
    apiV1MiscFacebookRecommendationsReplyRequestProperties,
    { additionalProperties: s.json() },
  );

export const apiV1MiscFacebookRecommendationsReplyRequestSchema: Schema<ApiV1MiscFacebookRecommendationsReplyRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscFacebookRecommendationsReplyRequest>(
      {
        ...apiV1MiscFacebookRecommendationsReplyRequestProperties,
        comment: s.string().check(s.minLength(1), s.maxLength(4096)),
      },
      { additionalProperties: s.json() },
    ),
  );
