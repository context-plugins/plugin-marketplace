import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  mediaItemBundleSocialMiscApiInternalSchema,
  mediaItemBundleSocialMiscApiSchema,
  type MediaItemBundleSocialMiscApi,
} from "./media-item-bundle-social-misc-api.js";

export type ApiV1MiscGoogleBusinessMediaResponse1 = {
  mediaItems?: MediaItemBundleSocialMiscApi[];
  nextPageToken?: string;
  totalMediaItemCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscGoogleBusinessMediaResponse1Properties: s.Shape<ApiV1MiscGoogleBusinessMediaResponse1> = {
  mediaItems: s.optional(s.array(s.lazy(() => mediaItemBundleSocialMiscApiInternalSchema))),
  nextPageToken: s.optional(s.string()),
  totalMediaItemCount: s.optional(s.float64()),
};

export const apiV1MiscGoogleBusinessMediaResponse1InternalSchema: Schema<ApiV1MiscGoogleBusinessMediaResponse1> =
  s.object<ApiV1MiscGoogleBusinessMediaResponse1>(apiV1MiscGoogleBusinessMediaResponse1Properties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscGoogleBusinessMediaResponse1Schema: Schema<ApiV1MiscGoogleBusinessMediaResponse1> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessMediaResponse1>(
      {
        ...apiV1MiscGoogleBusinessMediaResponse1Properties,
        mediaItems: s.optional(s.array(s.lazy(() => mediaItemBundleSocialMiscApiSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
