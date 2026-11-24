import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SocialAccountTypeBundleSocialOrganizationApi = {
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
export type SocialAccountTypeBundleSocialOrganizationApi =
  | (typeof SocialAccountTypeBundleSocialOrganizationApi)[keyof typeof SocialAccountTypeBundleSocialOrganizationApi]
  | (string & {});

export const socialAccountTypeBundleSocialOrganizationApiSchema: EnumSchema<SocialAccountTypeBundleSocialOrganizationApi> =
  s.enumOf<SocialAccountTypeBundleSocialOrganizationApi>(SocialAccountTypeBundleSocialOrganizationApi);
