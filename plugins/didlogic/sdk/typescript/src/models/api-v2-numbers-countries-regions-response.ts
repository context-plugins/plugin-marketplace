import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { regionSchema, type Region } from "./region.js";

export type ApiV2NumbersCountriesRegionsResponse = {
  /** List of states/provinces with available DID numbers */
  regions: Region[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersCountriesRegionsResponseSchema: Schema<ApiV2NumbersCountriesRegionsResponse> =
  s.object<ApiV2NumbersCountriesRegionsResponse>(
    {
      regions: s.array(s.lazy(() => regionSchema)),
    },
    { additionalProperties: s.json() },
  );
