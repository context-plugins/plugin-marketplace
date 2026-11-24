import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MediaItem = {
  uploadId: string;
  /** Alternative text for the image, used by screen readers. Applies to images/GIFs only. */
  altText?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mediaItemProperties: s.Shape<MediaItem> = {
  uploadId: s.string(),
  altText: s.optionalNullable(s.string()),
};

export const mediaItemInternalSchema: Schema<MediaItem> = s.object<MediaItem>(mediaItemProperties, {
  additionalProperties: s.json(),
});

export const mediaItemSchema: Schema<MediaItem> = s.lazySchema(() =>
  s.object<MediaItem>(
    {
      ...mediaItemProperties,
      altText: s.optionalNullable(s.string().check(s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);
