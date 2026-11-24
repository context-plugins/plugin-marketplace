import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  blueskyBundleSocialCommentApiSchema,
  type BlueskyBundleSocialCommentApi,
} from "./bluesky-bundle-social-comment-api.js";
import {
  discordBundleSocialCommentApiSchema,
  type DiscordBundleSocialCommentApi,
} from "./discord-bundle-social-comment-api.js";
import {
  facebookBundleSocialCommentApiSchema,
  type FacebookBundleSocialCommentApi,
} from "./facebook-bundle-social-comment-api.js";
import {
  instagramBundleSocialCommentApiSchema,
  type InstagramBundleSocialCommentApi,
} from "./instagram-bundle-social-comment-api.js";
import {
  linkedinBundleSocialCommentApiSchema,
  type LinkedinBundleSocialCommentApi,
} from "./linkedin-bundle-social-comment-api.js";
import {
  mastodonBundleSocialCommentApiSchema,
  type MastodonBundleSocialCommentApi,
} from "./mastodon-bundle-social-comment-api.js";
import {
  redditBundleSocialCommentApiSchema,
  type RedditBundleSocialCommentApi,
} from "./reddit-bundle-social-comment-api.js";
import {
  slackBundleSocialCommentApiSchema,
  type SlackBundleSocialCommentApi,
} from "./slack-bundle-social-comment-api.js";
import {
  threadsBundleSocialCommentApiSchema,
  type ThreadsBundleSocialCommentApi,
} from "./threads-bundle-social-comment-api.js";
import {
  tiktokBundleSocialCommentApiSchema,
  type TiktokBundleSocialCommentApi,
} from "./tiktok-bundle-social-comment-api.js";
import {
  twitterBundleSocialCommentApiSchema,
  type TwitterBundleSocialCommentApi,
} from "./twitter-bundle-social-comment-api.js";
import {
  youtubeBundleSocialCommentApiSchema,
  type YoutubeBundleSocialCommentApi,
} from "./youtube-bundle-social-comment-api.js";

export type DataBundleSocialCommentApi = {
  twitter?: TwitterBundleSocialCommentApi | null;
  facebook?: FacebookBundleSocialCommentApi | null;
  instagram?: InstagramBundleSocialCommentApi | null;
  threads?: ThreadsBundleSocialCommentApi | null;
  tiktok?: TiktokBundleSocialCommentApi | null;
  linkedin?: LinkedinBundleSocialCommentApi | null;
  youtube?: YoutubeBundleSocialCommentApi | null;
  reddit?: RedditBundleSocialCommentApi | null;
  mastodon?: MastodonBundleSocialCommentApi | null;
  discord?: DiscordBundleSocialCommentApi | null;
  slack?: SlackBundleSocialCommentApi | null;
  bluesky?: BlueskyBundleSocialCommentApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataBundleSocialCommentApiSchema: Schema<DataBundleSocialCommentApi> =
  s.object<DataBundleSocialCommentApi>(
    {
      twitter: s.optionalNullable(s.lazy(() => twitterBundleSocialCommentApiSchema)),
      facebook: s.optionalNullable(s.lazy(() => facebookBundleSocialCommentApiSchema)),
      instagram: s.optionalNullable(s.lazy(() => instagramBundleSocialCommentApiSchema)),
      threads: s.optionalNullable(s.lazy(() => threadsBundleSocialCommentApiSchema)),
      tiktok: s.optionalNullable(s.lazy(() => tiktokBundleSocialCommentApiSchema)),
      linkedin: s.optionalNullable(s.lazy(() => linkedinBundleSocialCommentApiSchema)),
      youtube: s.optionalNullable(s.lazy(() => youtubeBundleSocialCommentApiSchema)),
      reddit: s.optionalNullable(s.lazy(() => redditBundleSocialCommentApiSchema)),
      mastodon: s.optionalNullable(s.lazy(() => mastodonBundleSocialCommentApiSchema)),
      discord: s.optionalNullable(s.lazy(() => discordBundleSocialCommentApiSchema)),
      slack: s.optionalNullable(s.lazy(() => slackBundleSocialCommentApiSchema)),
      bluesky: s.optionalNullable(s.lazy(() => blueskyBundleSocialCommentApiSchema)),
      _keysMap: {
        twitter: "TWITTER",
        facebook: "FACEBOOK",
        instagram: "INSTAGRAM",
        threads: "THREADS",
        tiktok: "TIKTOK",
        linkedin: "LINKEDIN",
        youtube: "YOUTUBE",
        reddit: "REDDIT",
        mastodon: "MASTODON",
        discord: "DISCORD",
        slack: "SLACK",
        bluesky: "BLUESKY",
      },
    },
    { additionalProperties: s.json() },
  );
