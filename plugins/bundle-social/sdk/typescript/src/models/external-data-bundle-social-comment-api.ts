import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bluesky2Schema, type Bluesky2 } from "./bluesky2.js";
import {
  discord2BundleSocialCommentApiSchema,
  type Discord2BundleSocialCommentApi,
} from "./discord2-bundle-social-comment-api.js";
import {
  facebook2BundleSocialCommentApiSchema,
  type Facebook2BundleSocialCommentApi,
} from "./facebook2-bundle-social-comment-api.js";
import {
  instagram2BundleSocialCommentApiSchema,
  type Instagram2BundleSocialCommentApi,
} from "./instagram2-bundle-social-comment-api.js";
import {
  linkedin2BundleSocialCommentApiSchema,
  type Linkedin2BundleSocialCommentApi,
} from "./linkedin2-bundle-social-comment-api.js";
import {
  mastodon2BundleSocialCommentApiSchema,
  type Mastodon2BundleSocialCommentApi,
} from "./mastodon2-bundle-social-comment-api.js";
import {
  reddit2BundleSocialCommentApiSchema,
  type Reddit2BundleSocialCommentApi,
} from "./reddit2-bundle-social-comment-api.js";
import {
  slack2BundleSocialCommentApiSchema,
  type Slack2BundleSocialCommentApi,
} from "./slack2-bundle-social-comment-api.js";
import {
  threads2BundleSocialCommentApiSchema,
  type Threads2BundleSocialCommentApi,
} from "./threads2-bundle-social-comment-api.js";
import {
  tiktok2BundleSocialCommentApiSchema,
  type Tiktok2BundleSocialCommentApi,
} from "./tiktok2-bundle-social-comment-api.js";
import { twitter2Schema, type Twitter2 } from "./twitter2.js";
import {
  youtube2BundleSocialCommentApiSchema,
  type Youtube2BundleSocialCommentApi,
} from "./youtube2-bundle-social-comment-api.js";

export type ExternalDataBundleSocialCommentApi = {
  twitter?: Twitter2 | null;
  facebook?: Facebook2BundleSocialCommentApi | null;
  instagram?: Instagram2BundleSocialCommentApi | null;
  tiktok?: Tiktok2BundleSocialCommentApi | null;
  linkedin?: Linkedin2BundleSocialCommentApi | null;
  reddit?: Reddit2BundleSocialCommentApi | null;
  youtube?: Youtube2BundleSocialCommentApi | null;
  mastodon?: Mastodon2BundleSocialCommentApi | null;
  threads?: Threads2BundleSocialCommentApi | null;
  discord?: Discord2BundleSocialCommentApi | null;
  slack?: Slack2BundleSocialCommentApi | null;
  bluesky?: Bluesky2 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalDataBundleSocialCommentApiSchema: Schema<ExternalDataBundleSocialCommentApi> =
  s.object<ExternalDataBundleSocialCommentApi>(
    {
      twitter: s.optionalNullable(s.lazy(() => twitter2Schema)),
      facebook: s.optionalNullable(s.lazy(() => facebook2BundleSocialCommentApiSchema)),
      instagram: s.optionalNullable(s.lazy(() => instagram2BundleSocialCommentApiSchema)),
      tiktok: s.optionalNullable(s.lazy(() => tiktok2BundleSocialCommentApiSchema)),
      linkedin: s.optionalNullable(s.lazy(() => linkedin2BundleSocialCommentApiSchema)),
      reddit: s.optionalNullable(s.lazy(() => reddit2BundleSocialCommentApiSchema)),
      youtube: s.optionalNullable(s.lazy(() => youtube2BundleSocialCommentApiSchema)),
      mastodon: s.optionalNullable(s.lazy(() => mastodon2BundleSocialCommentApiSchema)),
      threads: s.optionalNullable(s.lazy(() => threads2BundleSocialCommentApiSchema)),
      discord: s.optionalNullable(s.lazy(() => discord2BundleSocialCommentApiSchema)),
      slack: s.optionalNullable(s.lazy(() => slack2BundleSocialCommentApiSchema)),
      bluesky: s.optionalNullable(s.lazy(() => bluesky2Schema)),
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
