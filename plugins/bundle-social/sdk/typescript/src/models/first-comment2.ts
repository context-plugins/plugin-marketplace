import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FirstComment2 = {
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

const firstComment2Properties: s.Shape<FirstComment2> = {
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
};

export const firstComment2InternalSchema: Schema<FirstComment2> = s.object<FirstComment2>(
  firstComment2Properties,
  { additionalProperties: s.json() },
);

export const firstComment2Schema: Schema<FirstComment2> = s.lazySchema(() =>
  s.object<FirstComment2>(
    {
      ...firstComment2Properties,
      tiktok: s.optionalNullable(s.string().check(s.maxLength(1200))),
      youtube: s.optionalNullable(s.string().check(s.maxLength(10000))),
      instagram: s.optionalNullable(s.string().check(s.maxLength(2200))),
      facebook: s.optionalNullable(s.string().check(s.maxLength(8000))),
      twitter: s.optionalNullable(s.string().check(s.maxLength(25000))),
      threads: s.optionalNullable(s.string().check(s.maxLength(500))),
      linkedin: s.optionalNullable(s.string().check(s.maxLength(1250))),
      reddit: s.optionalNullable(s.string().check(s.maxLength(10000))),
      mastodon: s.optionalNullable(s.string().check(s.maxLength(500))),
      discord: s.optionalNullable(s.string().check(s.maxLength(2000))),
      slack: s.optionalNullable(s.string().check(s.maxLength(30000))),
      bluesky: s.optionalNullable(s.string().check(s.maxLength(300))),
    },
    { additionalProperties: s.json() },
  ),
);
