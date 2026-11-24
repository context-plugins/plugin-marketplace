import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlatformBundleSocialCommentApi = {
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
export type PlatformBundleSocialCommentApi =
  | (typeof PlatformBundleSocialCommentApi)[keyof typeof PlatformBundleSocialCommentApi]
  | (string & {});

export const platformBundleSocialCommentApiSchema: EnumSchema<PlatformBundleSocialCommentApi> =
  s.enumOf<PlatformBundleSocialCommentApi>(PlatformBundleSocialCommentApi);
