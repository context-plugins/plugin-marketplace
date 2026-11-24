import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationAssociationSchema, type LocationAssociation } from "./location-association.js";
import { mediaFormatSchema, type MediaFormat } from "./media-format.js";

export type MediaItemBundleSocialMiscApi = {
  name?: string;
  googleUrl?: string;
  mediaFormat?: MediaFormat;
  sourceUrl?: string;
  thumbnailUrl?: string;
  locationAssociation?: LocationAssociation;
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mediaItemBundleSocialMiscApiProperties: s.Shape<MediaItemBundleSocialMiscApi> = {
  name: s.optional(s.string()),
  googleUrl: s.optional(s.string()),
  mediaFormat: s.optional(s.lazy(() => mediaFormatSchema)),
  sourceUrl: s.optional(s.string()),
  thumbnailUrl: s.optional(s.string()),
  locationAssociation: s.optional(s.lazy(() => locationAssociationSchema)),
  description: s.optional(s.string()),
};

export const mediaItemBundleSocialMiscApiInternalSchema: Schema<MediaItemBundleSocialMiscApi> =
  s.object<MediaItemBundleSocialMiscApi>(mediaItemBundleSocialMiscApiProperties, {
    additionalProperties: s.json(),
  });

export const mediaItemBundleSocialMiscApiSchema: Schema<MediaItemBundleSocialMiscApi> = s.lazySchema(() =>
  s.object<MediaItemBundleSocialMiscApi>(
    {
      ...mediaItemBundleSocialMiscApiProperties,
      googleUrl: s.optional(s.string().check(s.url())),
      sourceUrl: s.optional(s.string().check(s.url())),
      thumbnailUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
