import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Platform6 = {
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
export type Platform6 = (typeof Platform6)[keyof typeof Platform6] | (string & {});

export const platform6Schema: EnumSchema<Platform6> = s.enumOf<Platform6>(Platform6);
