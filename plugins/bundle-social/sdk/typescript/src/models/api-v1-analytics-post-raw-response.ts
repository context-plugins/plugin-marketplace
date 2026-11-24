import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item3Schema, type Item3 } from "./item3.js";
import { postInternalSchema, postSchema, type Post } from "./post.js";
import { profilePostSchema, type ProfilePost } from "./profile-post.js";

export type ApiV1AnalyticsPostRawResponse = {
  post: Post | null;
  profilePost?: ProfilePost;
  items: Item3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AnalyticsPostRawResponseProperties: s.Shape<ApiV1AnalyticsPostRawResponse> = {
  post: s.nullable(s.lazy(() => postInternalSchema)),
  profilePost: s.optional(s.lazy(() => profilePostSchema)),
  items: s.array(s.lazy(() => item3Schema)),
};

export const apiV1AnalyticsPostRawResponseInternalSchema: Schema<ApiV1AnalyticsPostRawResponse> =
  s.object<ApiV1AnalyticsPostRawResponse>(apiV1AnalyticsPostRawResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1AnalyticsPostRawResponseSchema: Schema<ApiV1AnalyticsPostRawResponse> = s.lazySchema(() =>
  s.object<ApiV1AnalyticsPostRawResponse>(
    {
      ...apiV1AnalyticsPostRawResponseProperties,
      post: s.nullable(s.lazy(() => postSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
