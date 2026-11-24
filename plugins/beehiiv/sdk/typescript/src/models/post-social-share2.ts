import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The social share type to use for this post. */
export const PostSocialShare2 = {
  CommentsAndLikesOnly: "comments_and_likes_only",
  WithCommentsAndLikes: "with_comments_and_likes",
  Top: "top",
  None: "none",
} as const;
export type PostSocialShare2 = (typeof PostSocialShare2)[keyof typeof PostSocialShare2] | (string & {});

export const postSocialShare2Schema: EnumSchema<PostSocialShare2> =
  s.enumOf<PostSocialShare2>(PostSocialShare2);
