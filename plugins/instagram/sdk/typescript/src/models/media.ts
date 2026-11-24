import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaTypeSchema, type MediaType } from "./media-type.js";

export type Media = {
  id?: string;
  caption?: string;
  mediaType?: MediaType;
  mediaUrl?: string;
  /** Thumbnail URL for videos. */
  thumbnailUrl?: string;
  permalink?: string;
  shortcode?: string;
  timestamp?: Date;
  likeCount?: number;
  commentsCount?: number;
  isCommentEnabled?: boolean;
  isSharedToFeed?: boolean;
  /** Alt text for accessibility. */
  altText?: string;
  username?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaSchema: Schema<Media> = s.object<Media>(
  {
    id: s.optional(s.string()),
    caption: s.optional(s.string()),
    mediaType: s.optional(s.lazy(() => mediaTypeSchema)),
    mediaUrl: s.optional(s.string()),
    thumbnailUrl: s.optional(s.string()),
    permalink: s.optional(s.string()),
    shortcode: s.optional(s.string()),
    timestamp: s.optional(s.dateTime()),
    likeCount: s.optional(s.int()),
    commentsCount: s.optional(s.int()),
    isCommentEnabled: s.optional(s.boolean()),
    isSharedToFeed: s.optional(s.boolean()),
    altText: s.optional(s.string()),
    username: s.optional(s.string()),
    _keysMap: {
      mediaType: "media_type",
      mediaUrl: "media_url",
      thumbnailUrl: "thumbnail_url",
      likeCount: "like_count",
      commentsCount: "comments_count",
      isCommentEnabled: "is_comment_enabled",
      isSharedToFeed: "is_shared_to_feed",
      altText: "alt_text",
    },
  },
  { additionalProperties: s.json() },
);
