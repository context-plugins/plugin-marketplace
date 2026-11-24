import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  pagingFacebookBusinessManagerFacebookPagesCommentsApiSchema,
  type PagingFacebookBusinessManagerFacebookPagesCommentsApi,
} from "./paging-facebook-business-manager-facebook-pages-comments-api.js";
import { postInternalSchema, postSchema, type Post } from "./post.js";

export type PostList = {
  data?: Post[];
  paging?: PagingFacebookBusinessManagerFacebookPagesCommentsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const postListProperties: s.Shape<PostList> = {
  data: s.optional(s.array(s.lazy(() => postInternalSchema))),
  paging: s.optional(s.lazy(() => pagingFacebookBusinessManagerFacebookPagesCommentsApiSchema)),
};

export const postListInternalSchema: Schema<PostList> = s.object<PostList>(postListProperties, {
  additionalProperties: s.json(),
});

export const postListSchema: Schema<PostList> = s.lazySchema(() =>
  s.object<PostList>(
    {
      ...postListProperties,
      data: s.optional(s.array(s.lazy(() => postSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
