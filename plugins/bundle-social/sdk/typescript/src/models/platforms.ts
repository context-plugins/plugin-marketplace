import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  blueskyBundleSocialAppApiSchema,
  type BlueskyBundleSocialAppApi,
} from "./bluesky-bundle-social-app-api.js";
import {
  discordBundleSocialAppApiSchema,
  type DiscordBundleSocialAppApi,
} from "./discord-bundle-social-app-api.js";
import {
  facebookBundleSocialAppApiSchema,
  type FacebookBundleSocialAppApi,
} from "./facebook-bundle-social-app-api.js";
import {
  googlebusinessBundleSocialAppApiSchema,
  type GooglebusinessBundleSocialAppApi,
} from "./googlebusiness-bundle-social-app-api.js";
import {
  instagramBundleSocialAppApiSchema,
  type InstagramBundleSocialAppApi,
} from "./instagram-bundle-social-app-api.js";
import {
  linkedinBundleSocialAppApiSchema,
  type LinkedinBundleSocialAppApi,
} from "./linkedin-bundle-social-app-api.js";
import {
  mastodonBundleSocialAppApiSchema,
  type MastodonBundleSocialAppApi,
} from "./mastodon-bundle-social-app-api.js";
import {
  pinterestBundleSocialAppApiSchema,
  type PinterestBundleSocialAppApi,
} from "./pinterest-bundle-social-app-api.js";
import {
  redditBundleSocialAppApiSchema,
  type RedditBundleSocialAppApi,
} from "./reddit-bundle-social-app-api.js";
import {
  slackBundleSocialAppApiSchema,
  type SlackBundleSocialAppApi,
} from "./slack-bundle-social-app-api.js";
import {
  snapchatBundleSocialAppApiSchema,
  type SnapchatBundleSocialAppApi,
} from "./snapchat-bundle-social-app-api.js";
import {
  threadsBundleSocialAppApiSchema,
  type ThreadsBundleSocialAppApi,
} from "./threads-bundle-social-app-api.js";
import {
  tiktokBundleSocialAppApiSchema,
  type TiktokBundleSocialAppApi,
} from "./tiktok-bundle-social-app-api.js";
import {
  twitterBundleSocialAppApiSchema,
  type TwitterBundleSocialAppApi,
} from "./twitter-bundle-social-app-api.js";
import {
  youtubeBundleSocialAppApiSchema,
  type YoutubeBundleSocialAppApi,
} from "./youtube-bundle-social-app-api.js";

export type Platforms = {
  facebook: FacebookBundleSocialAppApi;
  instagram: InstagramBundleSocialAppApi;
  tiktok: TiktokBundleSocialAppApi;
  youtube: YoutubeBundleSocialAppApi;
  twitter: TwitterBundleSocialAppApi;
  pinterest: PinterestBundleSocialAppApi;
  reddit: RedditBundleSocialAppApi;
  mastodon: MastodonBundleSocialAppApi;
  discord: DiscordBundleSocialAppApi;
  slack: SlackBundleSocialAppApi;
  bluesky: BlueskyBundleSocialAppApi;
  googleBusiness: GooglebusinessBundleSocialAppApi;
  linkedin: LinkedinBundleSocialAppApi;
  threads: ThreadsBundleSocialAppApi;
  snapchat: SnapchatBundleSocialAppApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const platformsSchema: Schema<Platforms> = s.object<Platforms>(
  {
    facebook: facebookBundleSocialAppApiSchema,
    instagram: instagramBundleSocialAppApiSchema,
    tiktok: tiktokBundleSocialAppApiSchema,
    youtube: youtubeBundleSocialAppApiSchema,
    twitter: twitterBundleSocialAppApiSchema,
    pinterest: pinterestBundleSocialAppApiSchema,
    reddit: redditBundleSocialAppApiSchema,
    mastodon: mastodonBundleSocialAppApiSchema,
    discord: discordBundleSocialAppApiSchema,
    slack: slackBundleSocialAppApiSchema,
    bluesky: blueskyBundleSocialAppApiSchema,
    googleBusiness: googlebusinessBundleSocialAppApiSchema,
    linkedin: linkedinBundleSocialAppApiSchema,
    threads: threadsBundleSocialAppApiSchema,
    snapchat: snapchatBundleSocialAppApiSchema,
    _keysMap: {
      facebook: "FACEBOOK",
      instagram: "INSTAGRAM",
      tiktok: "TIKTOK",
      youtube: "YOUTUBE",
      twitter: "TWITTER",
      pinterest: "PINTEREST",
      reddit: "REDDIT",
      mastodon: "MASTODON",
      discord: "DISCORD",
      slack: "SLACK",
      bluesky: "BLUESKY",
      googleBusiness: "GOOGLE_BUSINESS",
      linkedin: "LINKEDIN",
      threads: "THREADS",
      snapchat: "SNAPCHAT",
    },
  },
  { additionalProperties: s.json() },
);
