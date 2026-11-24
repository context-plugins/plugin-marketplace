import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaInternalSchema, mediaSchema, type Media } from "./media.js";

export type MediaListResponse = {
  media: Media[];
  total?: number;
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mediaListResponseProperties: s.Shape<MediaListResponse> = {
  media: s.array(s.lazy(() => mediaInternalSchema)),
  total: s.optional(s.int()),
  limit: s.optional(s.int()),
};

export const mediaListResponseInternalSchema: Schema<MediaListResponse> = s.object<MediaListResponse>(
  mediaListResponseProperties,
  { additionalProperties: s.json() },
);

export const mediaListResponseSchema: Schema<MediaListResponse> = s.lazySchema(() =>
  s.object<MediaListResponse>(
    {
      ...mediaListResponseProperties,
      media: s.array(s.lazy(() => mediaSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
