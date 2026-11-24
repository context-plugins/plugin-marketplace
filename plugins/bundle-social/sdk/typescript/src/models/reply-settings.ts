import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReplySettings = {
  Everyone: "EVERYONE",
  Following: "FOLLOWING",
  MentionedUsers: "MENTIONED_USERS",
  Subscribers: "SUBSCRIBERS",
  Verified: "VERIFIED",
} as const;
export type ReplySettings = (typeof ReplySettings)[keyof typeof ReplySettings] | (string & {});

export const replySettingsSchema: EnumSchema<ReplySettings> = s.enumOf<ReplySettings>(ReplySettings);
