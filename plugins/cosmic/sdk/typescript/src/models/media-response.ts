import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaInternalSchema, mediaSchema, type Media } from "./media.js";

export type MediaResponse = {
  /** An image, file, or document in the Bucket. */
  media: Media;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mediaResponseProperties: s.Shape<MediaResponse> = {
  media: mediaInternalSchema,
};

export const mediaResponseInternalSchema: Schema<MediaResponse> = s.object<MediaResponse>(
  mediaResponseProperties,
  { additionalProperties: s.json() },
);

export const mediaResponseSchema: Schema<MediaResponse> = s.lazySchema(() =>
  s.object<MediaResponse>(
    {
      ...mediaResponseProperties,
      media: mediaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
