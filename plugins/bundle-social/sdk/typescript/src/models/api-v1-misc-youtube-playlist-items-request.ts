import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscYoutubePlaylistItemsRequest = {
  teamId: string;
  playlistId: string;
  postId: string;
  position?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscYoutubePlaylistItemsRequestProperties: s.Shape<ApiV1MiscYoutubePlaylistItemsRequest> = {
  teamId: s.string(),
  playlistId: s.string(),
  postId: s.string(),
  position: s.optional(s.int()),
};

export const apiV1MiscYoutubePlaylistItemsRequestInternalSchema: Schema<ApiV1MiscYoutubePlaylistItemsRequest> =
  s.object<ApiV1MiscYoutubePlaylistItemsRequest>(apiV1MiscYoutubePlaylistItemsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscYoutubePlaylistItemsRequestSchema: Schema<ApiV1MiscYoutubePlaylistItemsRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscYoutubePlaylistItemsRequest>(
      {
        ...apiV1MiscYoutubePlaylistItemsRequestProperties,
        position: s.optional(s.int().check(s.gte(0))),
      },
      { additionalProperties: s.json() },
    ),
  );
