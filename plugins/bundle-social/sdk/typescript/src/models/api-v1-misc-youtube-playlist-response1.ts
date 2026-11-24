import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentDetailsSchema, type ContentDetails } from "./content-details.js";
import { snippetInternalSchema, snippetSchema, type Snippet } from "./snippet.js";
import {
  statusBundleSocialMiscApiSchema,
  type StatusBundleSocialMiscApi,
} from "./status-bundle-social-misc-api.js";

export type ApiV1MiscYoutubePlaylistResponse1 = {
  kind?: string;
  etag?: string;
  id?: string;
  snippet?: Snippet;
  status?: StatusBundleSocialMiscApi;
  contentDetails?: ContentDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscYoutubePlaylistResponse1Properties: s.Shape<ApiV1MiscYoutubePlaylistResponse1> = {
  kind: s.optional(s.string()),
  etag: s.optional(s.string()),
  id: s.optional(s.string()),
  snippet: s.optional(s.lazy(() => snippetInternalSchema)),
  status: s.optional(s.lazy(() => statusBundleSocialMiscApiSchema)),
  contentDetails: s.optional(s.lazy(() => contentDetailsSchema)),
};

export const apiV1MiscYoutubePlaylistResponse1InternalSchema: Schema<ApiV1MiscYoutubePlaylistResponse1> =
  s.object<ApiV1MiscYoutubePlaylistResponse1>(apiV1MiscYoutubePlaylistResponse1Properties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscYoutubePlaylistResponse1Schema: Schema<ApiV1MiscYoutubePlaylistResponse1> =
  s.lazySchema(() =>
    s.object<ApiV1MiscYoutubePlaylistResponse1>(
      {
        ...apiV1MiscYoutubePlaylistResponse1Properties,
        snippet: s.optional(s.lazy(() => snippetSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
