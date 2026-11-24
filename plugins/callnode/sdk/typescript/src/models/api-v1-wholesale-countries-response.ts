import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";

export type ApiV1WholesaleCountriesResponse = {
  countries?: Country[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1WholesaleCountriesResponseSchema: Schema<ApiV1WholesaleCountriesResponse> =
  s.object<ApiV1WholesaleCountriesResponse>(
    {
      countries: s.optional(s.array(s.lazy(() => countrySchema))),
    },
    { additionalProperties: s.json() },
  );
