import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blueskyInternalSchema, blueskySchema, type Bluesky } from "./bluesky.js";
import { discordSchema, type Discord } from "./discord.js";
import { facebookSchema, type Facebook } from "./facebook.js";
import { googlebusinessSchema, type Googlebusiness } from "./googlebusiness.js";
import { instagramInternalSchema, instagramSchema, type Instagram } from "./instagram.js";
import { linkedinSchema, type Linkedin } from "./linkedin.js";
import { mastodonSchema, type Mastodon } from "./mastodon.js";
import { pinterestSchema, type Pinterest } from "./pinterest.js";
import { redditSchema, type Reddit } from "./reddit.js";
import { slackSchema, type Slack } from "./slack.js";
import { snapchatSchema, type Snapchat } from "./snapchat.js";
import { threadsSchema, type Threads } from "./threads.js";
import { tiktokInternalSchema, tiktokSchema, type Tiktok } from "./tiktok.js";
import { twitterInternalSchema, twitterSchema, type Twitter } from "./twitter.js";
import { youtubeInternalSchema, youtubeSchema, type Youtube } from "./youtube.js";

export type Data = {
  twitter?: Twitter | null;
  pinterest?: Pinterest | null;
  facebook?: Facebook | null;
  instagram?: Instagram | null;
  threads?: Threads | null;
  tiktok?: Tiktok | null;
  linkedin?: Linkedin | null;
  youtube?: Youtube | null;
  reddit?: Reddit | null;
  discord?: Discord | null;
  slack?: Slack | null;
  mastodon?: Mastodon | null;
  bluesky?: Bluesky | null;
  googleBusiness?: Googlebusiness | null;
  snapchat?: Snapchat | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dataProperties: s.Shape<Data> = {
  twitter: s.optionalNullable(s.lazy(() => twitterInternalSchema)),
  pinterest: s.optionalNullable(s.lazy(() => pinterestSchema)),
  facebook: s.optionalNullable(s.lazy(() => facebookSchema)),
  instagram: s.optionalNullable(s.lazy(() => instagramInternalSchema)),
  threads: s.optionalNullable(s.lazy(() => threadsSchema)),
  tiktok: s.optionalNullable(s.lazy(() => tiktokInternalSchema)),
  linkedin: s.optionalNullable(s.lazy(() => linkedinSchema)),
  youtube: s.optionalNullable(s.lazy(() => youtubeInternalSchema)),
  reddit: s.optionalNullable(s.lazy(() => redditSchema)),
  discord: s.optionalNullable(s.lazy(() => discordSchema)),
  slack: s.optionalNullable(s.lazy(() => slackSchema)),
  mastodon: s.optionalNullable(s.lazy(() => mastodonSchema)),
  bluesky: s.optionalNullable(s.lazy(() => blueskyInternalSchema)),
  googleBusiness: s.optionalNullable(s.lazy(() => googlebusinessSchema)),
  snapchat: s.optionalNullable(s.lazy(() => snapchatSchema)),
  _keysMap: {
    twitter: "TWITTER",
    pinterest: "PINTEREST",
    facebook: "FACEBOOK",
    instagram: "INSTAGRAM",
    threads: "THREADS",
    tiktok: "TIKTOK",
    linkedin: "LINKEDIN",
    youtube: "YOUTUBE",
    reddit: "REDDIT",
    discord: "DISCORD",
    slack: "SLACK",
    mastodon: "MASTODON",
    bluesky: "BLUESKY",
    googleBusiness: "GOOGLE_BUSINESS",
    snapchat: "SNAPCHAT",
  },
};

export const dataInternalSchema: Schema<Data> = s.object<Data>(dataProperties, {
  additionalProperties: s.json(),
});

export const dataSchema: Schema<Data> = s.lazySchema(() =>
  s.object<Data>(
    {
      ...dataProperties,
      twitter: s.optionalNullable(s.lazy(() => twitterSchema)),
      instagram: s.optionalNullable(s.lazy(() => instagramSchema)),
      tiktok: s.optionalNullable(s.lazy(() => tiktokSchema)),
      youtube: s.optionalNullable(s.lazy(() => youtubeSchema)),
      bluesky: s.optionalNullable(s.lazy(() => blueskySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
