import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The social share type to use for this post. If not provided, the default value will be used. */
export const PostSocialShare1 = {
  CommentsAndLikesOnly: "comments_and_likes_only",
  WithCommentsAndLikes: "with_comments_and_likes",
  Top: "top",
  None: "none",
} as const;
export type PostSocialShare1 = (typeof PostSocialShare1)[keyof typeof PostSocialShare1] | (string & {});

export const postSocialShare1Schema: EnumSchema<PostSocialShare1> =
  s.enumOf<PostSocialShare1>(PostSocialShare1);
