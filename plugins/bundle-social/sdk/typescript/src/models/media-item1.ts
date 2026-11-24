import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MediaItem1 = {
  uploadId: string;
  altText?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaItem1Schema: Schema<MediaItem1> = s.object<MediaItem1>(
  {
    uploadId: s.string(),
    altText: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
