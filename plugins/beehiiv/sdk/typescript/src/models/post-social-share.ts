import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PostSocialShare = {
  CommentsAndLikesOnly: "comments_and_likes_only",
  WithCommentsAndLikes: "with_comments_and_likes",
  Top: "top",
  None: "none",
} as const;
export type PostSocialShare = (typeof PostSocialShare)[keyof typeof PostSocialShare] | (string & {});

export const postSocialShareSchema: EnumSchema<PostSocialShare> = s.enumOf<PostSocialShare>(PostSocialShare);
