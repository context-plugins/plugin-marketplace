import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SocialAccountType = {
  Facebook: "FACEBOOK",
  Instagram: "INSTAGRAM",
  Linkedin: "LINKEDIN",
  Youtube: "YOUTUBE",
  Tiktok: "TIKTOK",
  Reddit: "REDDIT",
  Threads: "THREADS",
  Mastodon: "MASTODON",
  Bluesky: "BLUESKY",
  Twitter: "TWITTER",
} as const;
export type SocialAccountType = (typeof SocialAccountType)[keyof typeof SocialAccountType] | (string & {});

export const socialAccountTypeSchema: EnumSchema<SocialAccountType> =
  s.enumOf<SocialAccountType>(SocialAccountType);
