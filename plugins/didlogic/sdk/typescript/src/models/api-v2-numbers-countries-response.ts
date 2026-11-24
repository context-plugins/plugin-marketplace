import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  countryDidlogicComNumbersInventoryApiSchema,
  type CountryDidlogicComNumbersInventoryApi,
} from "./country-didlogic-com-numbers-inventory-api.js";

export type ApiV2NumbersCountriesResponse = {
  /** List of countries with available DID numbers */
  countries: CountryDidlogicComNumbersInventoryApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersCountriesResponseSchema: Schema<ApiV2NumbersCountriesResponse> =
  s.object<ApiV2NumbersCountriesResponse>(
    {
      countries: s.array(s.lazy(() => countryDidlogicComNumbersInventoryApiSchema)),
    },
    { additionalProperties: s.json() },
  );
