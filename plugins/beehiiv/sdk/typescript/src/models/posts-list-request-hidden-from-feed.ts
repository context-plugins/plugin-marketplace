import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PostsListRequestHiddenFromFeed = {
  All: "all",
  True: "true",
  False: "false",
} as const;
export type PostsListRequestHiddenFromFeed =
  | (typeof PostsListRequestHiddenFromFeed)[keyof typeof PostsListRequestHiddenFromFeed]
  | (string & {});

export const postsListRequestHiddenFromFeedSchema: EnumSchema<PostsListRequestHiddenFromFeed> =
  s.enumOf<PostsListRequestHiddenFromFeed>(PostsListRequestHiddenFromFeed);
