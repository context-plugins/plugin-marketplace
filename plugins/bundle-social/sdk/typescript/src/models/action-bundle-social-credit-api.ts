import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ActionBundleSocialCreditApi = {
  TwitterContentCreate: "TWITTER_CONTENT_CREATE",
  TwitterContentCreateWithUrl: "TWITTER_CONTENT_CREATE_WITH_URL",
  TwitterContentManage: "TWITTER_CONTENT_MANAGE",
  TwitterInteractionDelete: "TWITTER_INTERACTION_DELETE",
  TwitterPostRead: "TWITTER_POST_READ",
  TwitterUserRead: "TWITTER_USER_READ",
  TwitterUserInteractionCreate: "TWITTER_USER_INTERACTION_CREATE",
} as const;
export type ActionBundleSocialCreditApi =
  | (typeof ActionBundleSocialCreditApi)[keyof typeof ActionBundleSocialCreditApi]
  | (string & {});

export const actionBundleSocialCreditApiSchema: EnumSchema<ActionBundleSocialCreditApi> =
  s.enumOf<ActionBundleSocialCreditApi>(ActionBundleSocialCreditApi);
