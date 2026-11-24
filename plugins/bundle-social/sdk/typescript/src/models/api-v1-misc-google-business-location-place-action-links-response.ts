import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  placeActionLinkInternalSchema,
  placeActionLinkSchema,
  type PlaceActionLink,
} from "./place-action-link.js";

export type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse = {
  placeActionLinks?: PlaceActionLink[];
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscGoogleBusinessLocationPlaceActionLinksResponseProperties: s.Shape<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse> =
  {
    placeActionLinks: s.optional(s.array(s.lazy(() => placeActionLinkInternalSchema))),
    nextPageToken: s.optional(s.string()),
  };

export const apiV1MiscGoogleBusinessLocationPlaceActionLinksResponseInternalSchema: Schema<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse> =
  s.object<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse>(
    apiV1MiscGoogleBusinessLocationPlaceActionLinksResponseProperties,
    { additionalProperties: s.json() },
  );

export const apiV1MiscGoogleBusinessLocationPlaceActionLinksResponseSchema: Schema<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse>(
      {
        ...apiV1MiscGoogleBusinessLocationPlaceActionLinksResponseProperties,
        placeActionLinks: s.optional(s.array(s.lazy(() => placeActionLinkSchema))),
      },
      { additionalProperties: s.json() },
    ),
  );
