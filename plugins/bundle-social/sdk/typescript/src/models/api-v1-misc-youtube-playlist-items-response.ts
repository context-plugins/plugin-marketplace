import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentDetails3Schema, type ContentDetails3 } from "./content-details3.js";
import { snippet3InternalSchema, snippet3Schema, type Snippet3 } from "./snippet3.js";

export type ApiV1MiscYoutubePlaylistItemsResponse = {
  kind?: string;
  etag?: string;
  id?: string;
  snippet?: Snippet3;
  contentDetails?: ContentDetails3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscYoutubePlaylistItemsResponseProperties: s.Shape<ApiV1MiscYoutubePlaylistItemsResponse> = {
  kind: s.optional(s.string()),
  etag: s.optional(s.string()),
  id: s.optional(s.string()),
  snippet: s.optional(s.lazy(() => snippet3InternalSchema)),
  contentDetails: s.optional(s.lazy(() => contentDetails3Schema)),
};

export const apiV1MiscYoutubePlaylistItemsResponseInternalSchema: Schema<ApiV1MiscYoutubePlaylistItemsResponse> =
  s.object<ApiV1MiscYoutubePlaylistItemsResponse>(apiV1MiscYoutubePlaylistItemsResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscYoutubePlaylistItemsResponseSchema: Schema<ApiV1MiscYoutubePlaylistItemsResponse> =
  s.lazySchema(() =>
    s.object<ApiV1MiscYoutubePlaylistItemsResponse>(
      {
        ...apiV1MiscYoutubePlaylistItemsResponseProperties,
        snippet: s.optional(s.lazy(() => snippet3Schema)),
      },
      { additionalProperties: s.json() },
    ),
  );
