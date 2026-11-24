import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PhotosRequest = {
  /** URL of the photo to upload */
  url?: string;
  /** Caption for the photo */
  caption?: string;
  /** Whether to publish the photo immediately @default true */
  published?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const photosRequestProperties: s.Shape<PhotosRequest> = {
  url: s.optional(s.string()),
  caption: s.optional(s.string()),
  published: s.defaulted(s.boolean(), true),
};

export const photosRequestInternalSchema: Schema<PhotosRequest> = s.object<PhotosRequest>(
  photosRequestProperties,
  { additionalProperties: s.json() },
);

export const photosRequestSchema: Schema<PhotosRequest> = s.lazySchema(() =>
  s.object<PhotosRequest>(
    {
      ...photosRequestProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
