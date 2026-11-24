import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationAssociationSchema, type LocationAssociation } from "./location-association.js";
import { mediaFormatSchema, type MediaFormat } from "./media-format.js";

export type ApiV1MiscGoogleBusinessMediaResponse = {
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

const apiV1MiscGoogleBusinessMediaResponseProperties: s.Shape<ApiV1MiscGoogleBusinessMediaResponse> = {
  name: s.optional(s.string()),
  googleUrl: s.optional(s.string()),
  mediaFormat: s.optional(s.lazy(() => mediaFormatSchema)),
  sourceUrl: s.optional(s.string()),
  thumbnailUrl: s.optional(s.string()),
  locationAssociation: s.optional(s.lazy(() => locationAssociationSchema)),
  description: s.optional(s.string()),
};

export const apiV1MiscGoogleBusinessMediaResponseInternalSchema: Schema<ApiV1MiscGoogleBusinessMediaResponse> =
  s.object<ApiV1MiscGoogleBusinessMediaResponse>(apiV1MiscGoogleBusinessMediaResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscGoogleBusinessMediaResponseSchema: Schema<ApiV1MiscGoogleBusinessMediaResponse> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessMediaResponse>(
      {
        ...apiV1MiscGoogleBusinessMediaResponseProperties,
        googleUrl: s.optional(s.string().check(s.url())),
        sourceUrl: s.optional(s.string().check(s.url())),
        thumbnailUrl: s.optional(s.string().check(s.url())),
      },
      { additionalProperties: s.json() },
    ),
  );
