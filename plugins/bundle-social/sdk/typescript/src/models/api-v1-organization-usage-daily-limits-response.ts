import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commentsSchema, type Comments } from "./comments.js";
import { postsSchema, type Posts } from "./posts.js";
import { typeSchema, type Type } from "./type.js";

export type ApiV1OrganizationUsageDailyLimitsResponse = {
  date: string;
  socialAccountId: string;
  type: Type;
  posts: Posts;
  comments: Comments;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1OrganizationUsageDailyLimitsResponseSchema: Schema<ApiV1OrganizationUsageDailyLimitsResponse> =
  s.object<ApiV1OrganizationUsageDailyLimitsResponse>(
    {
      date: s.string(),
      socialAccountId: s.string(),
      type: typeSchema,
      posts: postsSchema,
      comments: commentsSchema,
    },
    { additionalProperties: s.json() },
  );
