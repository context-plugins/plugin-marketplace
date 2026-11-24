import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commentSchema, type Comment } from "./comment.js";

export type ApiV1MiscFacebookRecommendationsCommentsResponse = {
  comments: Comment[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscFacebookRecommendationsCommentsResponseSchema: Schema<ApiV1MiscFacebookRecommendationsCommentsResponse> =
  s.object<ApiV1MiscFacebookRecommendationsCommentsResponse>(
    {
      comments: s.array(s.lazy(() => commentSchema)),
      total: s.float64(),
    },
    { additionalProperties: s.json() },
  );
