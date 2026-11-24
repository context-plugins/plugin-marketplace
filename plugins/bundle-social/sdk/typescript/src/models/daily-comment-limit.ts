import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DailyCommentLimit = {
  twitter?: number;
  facebook?: number;
  instagram?: number;
  linkedin?: number;
  youtube?: number;
  tiktok?: number;
  threads?: number;
  pinterest?: number;
  reddit?: number;
  discord?: number;
  slack?: number;
  mastodon?: number;
  bluesky?: number;
  googleBusiness?: number;
  snapchat?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dailyCommentLimitSchema: Schema<DailyCommentLimit> = s.object<DailyCommentLimit>(
  {
    twitter: s.optional(s.float64()),
    facebook: s.optional(s.float64()),
    instagram: s.optional(s.float64()),
    linkedin: s.optional(s.float64()),
    youtube: s.optional(s.float64()),
    tiktok: s.optional(s.float64()),
    threads: s.optional(s.float64()),
    pinterest: s.optional(s.float64()),
    reddit: s.optional(s.float64()),
    discord: s.optional(s.float64()),
    slack: s.optional(s.float64()),
    mastodon: s.optional(s.float64()),
    bluesky: s.optional(s.float64()),
    googleBusiness: s.optional(s.float64()),
    snapchat: s.optional(s.float64()),
    _keysMap: {
      twitter: "TWITTER",
      facebook: "FACEBOOK",
      instagram: "INSTAGRAM",
      linkedin: "LINKEDIN",
      youtube: "YOUTUBE",
      tiktok: "TIKTOK",
      threads: "THREADS",
      pinterest: "PINTEREST",
      reddit: "REDDIT",
      discord: "DISCORD",
      slack: "SLACK",
      mastodon: "MASTODON",
      bluesky: "BLUESKY",
      googleBusiness: "GOOGLE_BUSINESS",
      snapchat: "SNAPCHAT",
    },
  },
  { additionalProperties: s.json() },
);
