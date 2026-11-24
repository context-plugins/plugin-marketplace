import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SocialAccountTypeBundleSocialPostImportApi = {
  Facebook: "FACEBOOK",
  Instagram: "INSTAGRAM",
  Threads: "THREADS",
  Tiktok: "TIKTOK",
  Youtube: "YOUTUBE",
  Linkedin: "LINKEDIN",
  Pinterest: "PINTEREST",
  Reddit: "REDDIT",
  Mastodon: "MASTODON",
  Bluesky: "BLUESKY",
  Twitter: "TWITTER",
} as const;
export type SocialAccountTypeBundleSocialPostImportApi =
  | (typeof SocialAccountTypeBundleSocialPostImportApi)[keyof typeof SocialAccountTypeBundleSocialPostImportApi]
  | (string & {});

export const socialAccountTypeBundleSocialPostImportApiSchema: EnumSchema<SocialAccountTypeBundleSocialPostImportApi> =
  s.enumOf<SocialAccountTypeBundleSocialPostImportApi>(SocialAccountTypeBundleSocialPostImportApi);
