import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field5Schema, type Field5 } from "./field5.js";
import {
  placeActionLinkInternalSchema,
  placeActionLinkSchema,
  type PlaceActionLink,
} from "./place-action-link.js";

export type ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1 = {
  teamId: string;
  placeActionLink: PlaceActionLink;
  name: string;
  fields: Field5[];
};

const apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Properties: s.Shape<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1> =
  {
    teamId: s.string(),
    placeActionLink: placeActionLinkInternalSchema,
    name: s.string(),
    fields: s.array(s.lazy(() => field5Schema)),
  };

export const apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1InternalSchema: Schema<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1> =
  s.object<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1>(
    apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Properties,
  );

export const apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Schema: Schema<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1>({
      ...apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest1Properties,
      placeActionLink: placeActionLinkSchema,
      fields: s.array(s.lazy(() => field5Schema)).check(s.minLength(1), s.maxLength(3)),
    }),
  );
