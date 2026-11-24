import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bluesky2Schema, type Bluesky2 } from "./bluesky2.js";
import { discord2Schema, type Discord2 } from "./discord2.js";
import { facebook2Schema, type Facebook2 } from "./facebook2.js";
import { googlebusiness2Schema, type Googlebusiness2 } from "./googlebusiness2.js";
import { instagram2Schema, type Instagram2 } from "./instagram2.js";
import { linkedin2Schema, type Linkedin2 } from "./linkedin2.js";
import { mastodon2Schema, type Mastodon2 } from "./mastodon2.js";
import { pinterest2Schema, type Pinterest2 } from "./pinterest2.js";
import { reddit2Schema, type Reddit2 } from "./reddit2.js";
import { slack2Schema, type Slack2 } from "./slack2.js";
import { snapchat2Schema, type Snapchat2 } from "./snapchat2.js";
import { threads2Schema, type Threads2 } from "./threads2.js";
import { tiktok2Schema, type Tiktok2 } from "./tiktok2.js";
import { twitter2Schema, type Twitter2 } from "./twitter2.js";
import { youtube2Schema, type Youtube2 } from "./youtube2.js";

export type ExternalData = {
  twitter?: Twitter2 | null;
  pinterest?: Pinterest2 | null;
  facebook?: Facebook2 | null;
  instagram?: Instagram2 | null;
  tiktok?: Tiktok2 | null;
  linkedin?: Linkedin2 | null;
  reddit?: Reddit2 | null;
  discord?: Discord2 | null;
  slack?: Slack2 | null;
  youtube?: Youtube2 | null;
  mastodon?: Mastodon2 | null;
  threads?: Threads2 | null;
  bluesky?: Bluesky2 | null;
  googleBusiness?: Googlebusiness2 | null;
  snapchat?: Snapchat2 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalDataSchema: Schema<ExternalData> = s.object<ExternalData>(
  {
    twitter: s.optionalNullable(s.lazy(() => twitter2Schema)),
    pinterest: s.optionalNullable(s.lazy(() => pinterest2Schema)),
    facebook: s.optionalNullable(s.lazy(() => facebook2Schema)),
    instagram: s.optionalNullable(s.lazy(() => instagram2Schema)),
    tiktok: s.optionalNullable(s.lazy(() => tiktok2Schema)),
    linkedin: s.optionalNullable(s.lazy(() => linkedin2Schema)),
    reddit: s.optionalNullable(s.lazy(() => reddit2Schema)),
    discord: s.optionalNullable(s.lazy(() => discord2Schema)),
    slack: s.optionalNullable(s.lazy(() => slack2Schema)),
    youtube: s.optionalNullable(s.lazy(() => youtube2Schema)),
    mastodon: s.optionalNullable(s.lazy(() => mastodon2Schema)),
    threads: s.optionalNullable(s.lazy(() => threads2Schema)),
    bluesky: s.optionalNullable(s.lazy(() => bluesky2Schema)),
    googleBusiness: s.optionalNullable(s.lazy(() => googlebusiness2Schema)),
    snapchat: s.optionalNullable(s.lazy(() => snapchat2Schema)),
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
