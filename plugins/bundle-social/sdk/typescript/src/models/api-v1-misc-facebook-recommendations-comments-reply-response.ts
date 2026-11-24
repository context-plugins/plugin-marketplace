import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscFacebookRecommendationsCommentsReplyResponse = {
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscFacebookRecommendationsCommentsReplyResponseSchema: Schema<ApiV1MiscFacebookRecommendationsCommentsReplyResponse> =
  s.object<ApiV1MiscFacebookRecommendationsCommentsReplyResponse>(
    {
      id: s.string(),
    },
    { additionalProperties: s.json() },
  );
