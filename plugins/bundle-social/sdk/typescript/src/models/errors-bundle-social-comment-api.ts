import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorsBundleSocialCommentApi = {
  twitter?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  tiktok?: string | null;
  linkedin?: string | null;
  reddit?: string | null;
  youtube?: string | null;
  mastodon?: string | null;
  threads?: string | null;
  discord?: string | null;
  slack?: string | null;
  bluesky?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorsBundleSocialCommentApiSchema: Schema<ErrorsBundleSocialCommentApi> =
  s.object<ErrorsBundleSocialCommentApi>(
    {
      twitter: s.optionalNullable(s.string()),
      facebook: s.optionalNullable(s.string()),
      instagram: s.optionalNullable(s.string()),
      tiktok: s.optionalNullable(s.string()),
      linkedin: s.optionalNullable(s.string()),
      reddit: s.optionalNullable(s.string()),
      youtube: s.optionalNullable(s.string()),
      mastodon: s.optionalNullable(s.string()),
      threads: s.optionalNullable(s.string()),
      discord: s.optionalNullable(s.string()),
      slack: s.optionalNullable(s.string()),
      bluesky: s.optionalNullable(s.string()),
      _keysMap: {
        twitter: "TWITTER",
        facebook: "FACEBOOK",
        instagram: "INSTAGRAM",
        tiktok: "TIKTOK",
        linkedin: "LINKEDIN",
        reddit: "REDDIT",
        youtube: "YOUTUBE",
        mastodon: "MASTODON",
        threads: "THREADS",
        discord: "DISCORD",
        slack: "SLACK",
        bluesky: "BLUESKY",
      },
    },
    { additionalProperties: s.json() },
  );
