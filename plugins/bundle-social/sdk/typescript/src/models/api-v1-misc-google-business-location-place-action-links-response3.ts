import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3 = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3Schema: Schema<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3> =
  s.object<ApiV1MiscGoogleBusinessLocationPlaceActionLinksResponse3>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
