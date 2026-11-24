import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReplyControl = {
  Everyone: "everyone",
  AccountsYouFollow: "accounts_you_follow",
  MentionedOnly: "mentioned_only",
  ParentPostAuthorOnly: "parent_post_author_only",
  FollowersOnly: "followers_only",
} as const;
export type ReplyControl = (typeof ReplyControl)[keyof typeof ReplyControl] | (string & {});

export const replyControlSchema: EnumSchema<ReplyControl> = s.enumOf<ReplyControl>(ReplyControl);
