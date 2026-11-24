import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item1Schema, type Item1 } from "./item1.js";
import { postInternalSchema, postSchema, type Post } from "./post.js";
import { profilePostSchema, type ProfilePost } from "./profile-post.js";

export type ApiV1AnalyticsPostResponse = {
  post: Post | null;
  profilePost?: ProfilePost;
  items: Item1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AnalyticsPostResponseProperties: s.Shape<ApiV1AnalyticsPostResponse> = {
  post: s.nullable(s.lazy(() => postInternalSchema)),
  profilePost: s.optional(s.lazy(() => profilePostSchema)),
  items: s.array(s.lazy(() => item1Schema)),
};

export const apiV1AnalyticsPostResponseInternalSchema: Schema<ApiV1AnalyticsPostResponse> =
  s.object<ApiV1AnalyticsPostResponse>(apiV1AnalyticsPostResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1AnalyticsPostResponseSchema: Schema<ApiV1AnalyticsPostResponse> = s.lazySchema(() =>
  s.object<ApiV1AnalyticsPostResponse>(
    {
      ...apiV1AnalyticsPostResponseProperties,
      post: s.nullable(s.lazy(() => postSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
