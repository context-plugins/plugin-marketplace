import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MediaInfo = {
  /** Total source image count represented by the vehicle media set. */
  thumbsCount?: number;
  /** True when IAAI Link360 or Copart copartMedia.views_360 source data is available. */
  has360?: boolean;
  photos?: string[];
  /** Total image count. */
  imagesCount?: number;
  /**
   * Number of media items returned in this response. Summary view may return fewer items than
   * images_count.
   */
  itemsCount?: number;
  hasVideo?: boolean;
  items?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mediaInfoProperties: s.Shape<MediaInfo> = {
  thumbsCount: s.optional(s.int()),
  has360: s.optional(s.boolean()),
  photos: s.optional(s.array(s.string())),
  imagesCount: s.optional(s.int()),
  itemsCount: s.optional(s.int()),
  hasVideo: s.optional(s.boolean()),
  items: s.optional(s.array(s.record(s.string(), s.unknown()))),
  _keysMap: {
    thumbsCount: "thumbs_count",
    has360: "has_360",
    imagesCount: "images_count",
    itemsCount: "items_count",
    hasVideo: "has_video",
  },
};

export const mediaInfoInternalSchema: Schema<MediaInfo> = s.object<MediaInfo>(mediaInfoProperties, {
  additionalProperties: s.json(),
});

export const mediaInfoSchema: Schema<MediaInfo> = s.lazySchema(() =>
  s.object<MediaInfo>(
    {
      ...mediaInfoProperties,
      thumbsCount: s.optional(s.int().check(s.gte(0))),
      photos: s.optional(s.array(s.string().check(s.url()))),
      imagesCount: s.optional(s.int().check(s.gte(0))),
      itemsCount: s.optional(s.int().check(s.gte(0))),
    },
    { additionalProperties: s.json() },
  ),
);
