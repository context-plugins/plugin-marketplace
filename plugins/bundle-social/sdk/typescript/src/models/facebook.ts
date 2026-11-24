import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaItem1Schema, type MediaItem1 } from "./media-item1.js";
import { Type1, type1Schema } from "./type1.js";

export type Facebook = {
  /** @default Type1.Post */
  type?: Type1;
  text?: string | null;
  uploadIds?: string[] | null;
  mediaItems?: MediaItem1[] | null;
  /** The URL to which the post will link to. Only available for type POST. */
  link?: string | null;
  /** The URL to image uploaded on bundle.social. */
  thumbnail?: string | null;
  /**
   * Title for video posts (type POST with video only, not REEL or STORY). This is displayed as the
   * video title on Facebook.
   */
  mediaTitle?: string | null;
  /**
   * If passed, instead of publishing immediately, the post will be scheduled for the given
   * date/time directly in Meta scheduler. Local date/time as ISO 8601 string max 30 days in the
   * future.
   */
  nativeScheduleTime?: Date | null;
  /**
   * Facebook text background preset ID (colored status), e.g. 1679248482160767 for blue. Only
   * available for type POST without video.
   */
  textFormatPresetId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const facebookSchema: Schema<Facebook> = s.object<Facebook>(
  {
    type: s.defaulted(type1Schema, Type1.Post),
    text: s.optionalNullable(s.string()),
    uploadIds: s.optionalNullable(s.array(s.string())),
    mediaItems: s.optionalNullable(s.array(s.lazy(() => mediaItem1Schema))),
    link: s.optionalNullable(s.string()),
    thumbnail: s.optionalNullable(s.string()),
    mediaTitle: s.optionalNullable(s.string()),
    nativeScheduleTime: s.optionalNullable(s.dateTime()),
    textFormatPresetId: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
