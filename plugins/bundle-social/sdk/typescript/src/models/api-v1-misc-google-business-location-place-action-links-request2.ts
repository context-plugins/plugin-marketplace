import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2 = {
  teamId: string;
  name: string;
};

export const apiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2Schema: Schema<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2> =
  s.object<ApiV1MiscGoogleBusinessLocationPlaceActionLinksRequest2>({
    teamId: s.string(),
    name: s.string(),
  });
