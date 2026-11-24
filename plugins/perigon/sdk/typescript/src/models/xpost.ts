import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { xPostMediaSchema, type XPostMedia } from "./xpost-media.js";

export type XPost = {
  tweetId: string;
  screenName: string;
  text: string;
  lang: string;
  createdAt: Date;
  avatarUrl?: string | null;
  favorites?: number | null;
  retweets?: number | null;
  replies?: number | null;
  quotes?: number | null;
  bookmarks?: number | null;
  media: XPostMedia;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const xPostSchema: Schema<XPost> = s.object<XPost>(
  {
    tweetId: s.string(),
    screenName: s.string(),
    text: s.string(),
    lang: s.string(),
    createdAt: s.dateTime(),
    avatarUrl: s.optionalNullable(s.string()),
    favorites: s.optionalNullable(s.int()),
    retweets: s.optionalNullable(s.int()),
    replies: s.optionalNullable(s.int()),
    quotes: s.optionalNullable(s.int()),
    bookmarks: s.optionalNullable(s.int()),
    media: xPostMediaSchema,
  },
  { additionalProperties: s.json() },
);
