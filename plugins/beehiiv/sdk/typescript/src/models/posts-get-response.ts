import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postSchema, type Post } from "./post.js";

export type PostsGetResponse = {
  data: Post;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postsGetResponseSchema: Schema<PostsGetResponse> = s.object<PostsGetResponse>(
  {
    data: postSchema,
  },
  { additionalProperties: s.json() },
);
