import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  item2BundleSocialMiscApiInternalSchema,
  item2BundleSocialMiscApiSchema,
  type Item2BundleSocialMiscApi,
} from "./item2-bundle-social-misc-api.js";
import { pageInfoSchema, type PageInfo } from "./page-info.js";

export type ApiV1MiscYoutubePlaylistItemsResponse1 = {
  kind?: string;
  etag?: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo?: PageInfo;
  items?: Item2BundleSocialMiscApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscYoutubePlaylistItemsResponse1Properties: s.Shape<ApiV1MiscYoutubePlaylistItemsResponse1> = {
  kind: s.optional(s.string()),
  etag: s.optional(s.string()),
  nextPageToken: s.optional(s.string()),
  prevPageToken: s.optional(s.string()),
  pageInfo: s.optional(s.lazy(() => pageInfoSchema)),
  items: s.optional(s.array(s.lazy(() => item2BundleSocialMiscApiInternalSchema))),
};

export const apiV1MiscYoutubePlaylistItemsResponse1InternalSchema: Schema<ApiV1MiscYoutubePlaylistItemsResponse1> =
  s.object<ApiV1MiscYoutubePlaylistItemsResponse1>(apiV1MiscYoutubePlaylistItemsResponse1Properties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscYoutubePlaylistItemsResponse1Schema: Schema<ApiV1MiscYoutubePlaylistItemsResponse1> =
  s.lazySchema(() =>
    s.object<ApiV1MiscYoutubePlaylistItemsResponse1>(
      {
        ...apiV1MiscYoutubePlaylistItemsResponse1Properties,
        items: s.optional(s.array(s.lazy(() => item2BundleSocialMiscApiSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
