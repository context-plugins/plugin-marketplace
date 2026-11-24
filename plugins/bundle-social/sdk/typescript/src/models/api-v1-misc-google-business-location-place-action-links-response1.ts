import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { placeActionTypeSchema, type PlaceActionType } from "./place-action-type.js";

export type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1 = {
  name?: string;
  uri?: string;
  placeActionType?: PlaceActionType;
  isPreferred?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1Properties: s.Shape<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1> =
  {
    name: s.optional(s.string()),
    uri: s.optional(s.string()),
    placeActionType: s.optional(s.lazy(() => placeActionTypeSchema)),
    isPreferred: s.optional(s.boolean()),
  };

export const apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1InternalSchema: Schema<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1> =
  s.object<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1>(
    apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1Properties,
    { additionalProperties: s.json() },
  );

export const apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1Schema: Schema<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1>(
      {
        ...apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse1Properties,
        uri: s.optional(s.string().check(s.url())),
      },
      { additionalProperties: s.json() },
    ),
  );
