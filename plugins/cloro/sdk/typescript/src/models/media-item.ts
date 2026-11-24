import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Media content (video or image) found in response */
export type MediaItem = {
  /** Media title */
  title?: string;
  /** Media URL */
  url?: string;
  /** Thumbnail URL */
  thumbnail?: string;
  /** Media type as Perplexity labels it, for example `video` or `image` */
  medium?: string;
  /** Source platform */
  source?: string;
  /** Original image width */
  imageWidth?: number;
  /** Original image height */
  imageHeight?: number;
  /** Thumbnail width */
  thumbnailWidth?: number;
  /** Thumbnail height */
  thumbnailHeight?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaItemSchema: Schema<MediaItem> = s.object<MediaItem>(
  {
    title: s.optional(s.string()),
    url: s.optional(s.string()),
    thumbnail: s.optional(s.string()),
    medium: s.optional(s.string()),
    source: s.optional(s.string()),
    imageWidth: s.optional(s.float64()),
    imageHeight: s.optional(s.float64()),
    thumbnailWidth: s.optional(s.float64()),
    thumbnailHeight: s.optional(s.float64()),
    _keysMap: {
      imageWidth: "image_width",
      imageHeight: "image_height",
      thumbnailWidth: "thumbnail_width",
      thumbnailHeight: "thumbnail_height",
    },
  },
  { additionalProperties: s.json() },
);
