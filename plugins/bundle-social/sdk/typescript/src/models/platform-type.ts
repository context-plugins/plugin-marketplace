import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlatformType = {
  Tiktok: "TIKTOK",
  Youtube: "YOUTUBE",
  Instagram: "INSTAGRAM",
  Facebook: "FACEBOOK",
  Threads: "THREADS",
  Reddit: "REDDIT",
  Pinterest: "PINTEREST",
  Mastodon: "MASTODON",
  Linkedin: "LINKEDIN",
  Bluesky: "BLUESKY",
  GoogleBusiness: "GOOGLE_BUSINESS",
  Snapchat: "SNAPCHAT",
  Twitter: "TWITTER",
} as const;
export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType] | (string & {});

export const platformTypeSchema: EnumSchema<PlatformType> = s.enumOf<PlatformType>(PlatformType);
