import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaItemInternalSchema, mediaItemSchema, type MediaItem } from "./media-item.js";
import { pollInternalSchema, pollSchema, type Poll } from "./poll.js";
import { replySettingsSchema, type ReplySettings } from "./reply-settings.js";
import { threadInternalSchema, threadSchema, type Thread } from "./thread.js";

export type Twitter = {
  text?: string | null;
  uploadIds?: string[] | null;
  mediaItems?: MediaItem[] | null;
  replySettings?: ReplySettings | null;
  poll?: Poll | null;
  quoteTweetId?: string | null;
  replyToTweetId?: string | null;
  subscribersOnly?: boolean | null;
  thread?: Thread[] | null;
  tweetStorm?: boolean | null;
  tweetStormNumbering?: boolean | null;
  /**
   * Set to true if the post contains AI-generated media. Adds X's 'made with AI' label.
   *
   * @default false
   */
  isAiGenerated?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const twitterProperties: s.Shape<Twitter> = {
  text: s.optionalNullable(s.string()),
  uploadIds: s.optionalNullable(s.array(s.string())),
  mediaItems: s.optionalNullable(s.array(s.lazy(() => mediaItemInternalSchema))),
  replySettings: s.optionalNullable(s.lazy(() => replySettingsSchema)),
  poll: s.optionalNullable(s.lazy(() => pollInternalSchema)),
  quoteTweetId: s.optionalNullable(s.string()),
  replyToTweetId: s.optionalNullable(s.string()),
  subscribersOnly: s.optionalNullable(s.boolean()),
  thread: s.optionalNullable(s.array(s.lazy(() => threadInternalSchema))),
  tweetStorm: s.optionalNullable(s.boolean()),
  tweetStormNumbering: s.optionalNullable(s.boolean()),
  isAiGenerated: s.defaulted(s.nullable(s.boolean()), false),
};

export const twitterInternalSchema: Schema<Twitter> = s.object<Twitter>(twitterProperties, {
  additionalProperties: s.json(),
});

export const twitterSchema: Schema<Twitter> = s.lazySchema(() =>
  s.object<Twitter>(
    {
      ...twitterProperties,
      mediaItems: s.optionalNullable(s.array(s.lazy(() => mediaItemSchema))),
      poll: s.optionalNullable(s.lazy(() => pollSchema)),
      thread: s.optionalNullable(s.array(s.lazy(() => threadSchema)).check(s.maxLength(25))),
    },
    { additionalProperties: s.json() },
  ),
);
