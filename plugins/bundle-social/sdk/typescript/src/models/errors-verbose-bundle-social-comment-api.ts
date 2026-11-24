import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bluesky1Schema, type Bluesky1 } from "./bluesky1.js";
import { discord1Schema, type Discord1 } from "./discord1.js";
import { facebook1Schema, type Facebook1 } from "./facebook1.js";
import { instagram1Schema, type Instagram1 } from "./instagram1.js";
import { linkedin1Schema, type Linkedin1 } from "./linkedin1.js";
import { mastodon1Schema, type Mastodon1 } from "./mastodon1.js";
import { reddit1Schema, type Reddit1 } from "./reddit1.js";
import { slack1Schema, type Slack1 } from "./slack1.js";
import { threads1Schema, type Threads1 } from "./threads1.js";
import { tiktok1Schema, type Tiktok1 } from "./tiktok1.js";
import { twitter1Schema, type Twitter1 } from "./twitter1.js";
import { youtube1Schema, type Youtube1 } from "./youtube1.js";

export type ErrorsVerboseBundleSocialCommentApi = {
  twitter?: Twitter1 | null;
  facebook?: Facebook1 | null;
  instagram?: Instagram1 | null;
  tiktok?: Tiktok1 | null;
  linkedin?: Linkedin1 | null;
  reddit?: Reddit1 | null;
  youtube?: Youtube1 | null;
  mastodon?: Mastodon1 | null;
  threads?: Threads1 | null;
  discord?: Discord1 | null;
  slack?: Slack1 | null;
  bluesky?: Bluesky1 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorsVerboseBundleSocialCommentApiSchema: Schema<ErrorsVerboseBundleSocialCommentApi> =
  s.object<ErrorsVerboseBundleSocialCommentApi>(
    {
      twitter: s.optionalNullable(s.lazy(() => twitter1Schema)),
      facebook: s.optionalNullable(s.lazy(() => facebook1Schema)),
      instagram: s.optionalNullable(s.lazy(() => instagram1Schema)),
      tiktok: s.optionalNullable(s.lazy(() => tiktok1Schema)),
      linkedin: s.optionalNullable(s.lazy(() => linkedin1Schema)),
      reddit: s.optionalNullable(s.lazy(() => reddit1Schema)),
      youtube: s.optionalNullable(s.lazy(() => youtube1Schema)),
      mastodon: s.optionalNullable(s.lazy(() => mastodon1Schema)),
      threads: s.optionalNullable(s.lazy(() => threads1Schema)),
      discord: s.optionalNullable(s.lazy(() => discord1Schema)),
      slack: s.optionalNullable(s.lazy(() => slack1Schema)),
      bluesky: s.optionalNullable(s.lazy(() => bluesky1Schema)),
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
