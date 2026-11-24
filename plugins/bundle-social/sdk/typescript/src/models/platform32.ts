import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Platform32 = {
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
export type Platform32 = (typeof Platform32)[keyof typeof Platform32] | (string & {});

export const platform32Schema: EnumSchema<Platform32> = s.enumOf<Platform32>(Platform32);
