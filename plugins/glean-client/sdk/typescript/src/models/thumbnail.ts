import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Thumbnail = {
  /** Photo id if the thumbnail is from splash. */
  photoId?: string;
  /**
   * Thumbnail URL. This can be user provided image and/or from downloaded images hosted by Glean.
   */
  url?: string;
};

export const thumbnailSchema: Schema<Thumbnail> = s.object<Thumbnail>({
  photoId: s.optional(s.string()),
  url: s.optional(s.string()),
});
