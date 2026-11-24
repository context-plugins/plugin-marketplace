import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Errors = {
  twitter?: string | null;
  pinterest?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  tiktok?: string | null;
  linkedin?: string | null;
  reddit?: string | null;
  discord?: string | null;
  slack?: string | null;
  youtube?: string | null;
  mastodon?: string | null;
  threads?: string | null;
  bluesky?: string | null;
  googleBusiness?: string | null;
  snapchat?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorsSchema: Schema<Errors> = s.object<Errors>(
  {
    twitter: s.optionalNullable(s.string()),
    pinterest: s.optionalNullable(s.string()),
    facebook: s.optionalNullable(s.string()),
    instagram: s.optionalNullable(s.string()),
    tiktok: s.optionalNullable(s.string()),
    linkedin: s.optionalNullable(s.string()),
    reddit: s.optionalNullable(s.string()),
    discord: s.optionalNullable(s.string()),
    slack: s.optionalNullable(s.string()),
    youtube: s.optionalNullable(s.string()),
    mastodon: s.optionalNullable(s.string()),
    threads: s.optionalNullable(s.string()),
    bluesky: s.optionalNullable(s.string()),
    googleBusiness: s.optionalNullable(s.string()),
    snapchat: s.optionalNullable(s.string()),
    _keysMap: {
      twitter: "TWITTER",
      pinterest: "PINTEREST",
      facebook: "FACEBOOK",
      instagram: "INSTAGRAM",
      tiktok: "TIKTOK",
      linkedin: "LINKEDIN",
      reddit: "REDDIT",
      discord: "DISCORD",
      slack: "SLACK",
      youtube: "YOUTUBE",
      mastodon: "MASTODON",
      threads: "THREADS",
      bluesky: "BLUESKY",
      googleBusiness: "GOOGLE_BUSINESS",
      snapchat: "SNAPCHAT",
    },
  },
  { additionalProperties: s.json() },
);
