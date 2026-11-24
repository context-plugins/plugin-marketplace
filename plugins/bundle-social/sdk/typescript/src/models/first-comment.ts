import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FirstComment = {
  tiktok?: string | null;
  youtube?: string | null;
  instagram?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  threads?: string | null;
  linkedin?: string | null;
  reddit?: string | null;
  mastodon?: string | null;
  discord?: string | null;
  slack?: string | null;
  bluesky?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const firstCommentSchema: Schema<FirstComment> = s.object<FirstComment>(
  {
    tiktok: s.optionalNullable(s.string()),
    youtube: s.optionalNullable(s.string()),
    instagram: s.optionalNullable(s.string()),
    facebook: s.optionalNullable(s.string()),
    twitter: s.optionalNullable(s.string()),
    threads: s.optionalNullable(s.string()),
    linkedin: s.optionalNullable(s.string()),
    reddit: s.optionalNullable(s.string()),
    mastodon: s.optionalNullable(s.string()),
    discord: s.optionalNullable(s.string()),
    slack: s.optionalNullable(s.string()),
    bluesky: s.optionalNullable(s.string()),
    _keysMap: {
      tiktok: "TIKTOK",
      youtube: "YOUTUBE",
      instagram: "INSTAGRAM",
      facebook: "FACEBOOK",
      twitter: "TWITTER",
      threads: "THREADS",
      linkedin: "LINKEDIN",
      reddit: "REDDIT",
      mastodon: "MASTODON",
      discord: "DISCORD",
      slack: "SLACK",
      bluesky: "BLUESKY",
    },
  },
  { additionalProperties: s.json() },
);
