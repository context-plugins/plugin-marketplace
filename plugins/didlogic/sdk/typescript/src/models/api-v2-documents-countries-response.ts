import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";

export type ApiV2DocumentsCountriesResponse = {
  /** Countries a document can be uploaded for */
  countries: Country[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2DocumentsCountriesResponseSchema: Schema<ApiV2DocumentsCountriesResponse> =
  s.object<ApiV2DocumentsCountriesResponse>(
    {
      countries: s.array(s.lazy(() => countrySchema)),
    },
    { additionalProperties: s.json() },
  );
