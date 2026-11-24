import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type = {
  Tiktok: "TIKTOK",
  Youtube: "YOUTUBE",
  Instagram: "INSTAGRAM",
  Facebook: "FACEBOOK",
  Twitter: "TWITTER",
  Threads: "THREADS",
  Linkedin: "LINKEDIN",
  Pinterest: "PINTEREST",
  Reddit: "REDDIT",
  Mastodon: "MASTODON",
  Discord: "DISCORD",
  Slack: "SLACK",
  Bluesky: "BLUESKY",
  GoogleBusiness: "GOOGLE_BUSINESS",
  Snapchat: "SNAPCHAT",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
