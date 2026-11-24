import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item1BundleSocialMiscApiInternalSchema,
  item1BundleSocialMiscApiSchema,
  type Item1BundleSocialMiscApi,
} from "./item1-bundle-social-misc-api.js";
import { pageInfoSchema, type PageInfo } from "./page-info.js";

export type ApiV1MiscYoutubePlaylistResponse = {
  kind?: string;
  etag?: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo?: PageInfo;
  items?: Item1BundleSocialMiscApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscYoutubePlaylistResponseProperties: s.Shape<ApiV1MiscYoutubePlaylistResponse> = {
  kind: s.optional(s.string()),
  etag: s.optional(s.string()),
  nextPageToken: s.optional(s.string()),
  prevPageToken: s.optional(s.string()),
  pageInfo: s.optional(s.lazy(() => pageInfoSchema)),
  items: s.optional(s.array(s.lazy(() => item1BundleSocialMiscApiInternalSchema))),
};

export const apiV1MiscYoutubePlaylistResponseInternalSchema: Schema<ApiV1MiscYoutubePlaylistResponse> =
  s.object<ApiV1MiscYoutubePlaylistResponse>(apiV1MiscYoutubePlaylistResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscYoutubePlaylistResponseSchema: Schema<ApiV1MiscYoutubePlaylistResponse> = s.lazySchema(
  () =>
    s.object<ApiV1MiscYoutubePlaylistResponse>(
      {
        ...apiV1MiscYoutubePlaylistResponseProperties,
        items: s.optional(s.array(s.lazy(() => item1BundleSocialMiscApiSchema))),
      },
      { additionalProperties: s.json() },
    ),
);
