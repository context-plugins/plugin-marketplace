import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlatformBundleSocialPostApi = {
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
export type PlatformBundleSocialPostApi =
  | (typeof PlatformBundleSocialPostApi)[keyof typeof PlatformBundleSocialPostApi]
  | (string & {});

export const platformBundleSocialPostApiSchema: EnumSchema<PlatformBundleSocialPostApi> =
  s.enumOf<PlatformBundleSocialPostApi>(PlatformBundleSocialPostApi);
