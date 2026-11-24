import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  placeActionLinkInternalSchema,
  placeActionLinkSchema,
  type PlaceActionLink,
} from "./place-action-link.js";

export type ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest = {
  teamId: string;
  placeActionLink: PlaceActionLink;
};

const apiV1MiscGoogleBusinessLocationPlaceActionLinksRequestProperties: s.Shape<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest> =
  {
    teamId: s.string(),
    placeActionLink: placeActionLinkInternalSchema,
  };

export const apiV1MiscGoogleBusinessLocationPlaceActionLinksRequestInternalSchema: Schema<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest> =
  s.object<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest>(
    apiV1MiscGoogleBusinessLocationPlaceActionLinksRequestProperties,
  );

export const apiV1MiscGoogleBusinessLocationPlaceActionLinksRequestSchema: Schema<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest>({
      ...apiV1MiscGoogleBusinessLocationPlaceActionLinksRequestProperties,
      placeActionLink: placeActionLinkSchema,
    }),
  );
