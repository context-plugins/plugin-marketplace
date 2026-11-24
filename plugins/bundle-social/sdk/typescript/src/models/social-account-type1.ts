import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SocialAccountType1 = {
  Tiktok: "TIKTOK",
  Youtube: "YOUTUBE",
  Instagram: "INSTAGRAM",
  Facebook: "FACEBOOK",
  Twitter: "TWITTER",
  Threads: "THREADS",
  Linkedin: "LINKEDIN",
  Reddit: "REDDIT",
  Mastodon: "MASTODON",
  Discord: "DISCORD",
  Slack: "SLACK",
  Bluesky: "BLUESKY",
} as const;
export type SocialAccountType1 = (typeof SocialAccountType1)[keyof typeof SocialAccountType1] | (string & {});

export const socialAccountType1Schema: EnumSchema<SocialAccountType1> =
  s.enumOf<SocialAccountType1>(SocialAccountType1);
