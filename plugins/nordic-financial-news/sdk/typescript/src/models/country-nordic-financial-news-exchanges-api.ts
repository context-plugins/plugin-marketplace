import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Country where the exchange is located */
export type CountryNordicFinancialNewsExchangesApi = {
  id?: string;
  name?: string;
  iso2Code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countryNordicFinancialNewsExchangesApiSchema: Schema<CountryNordicFinancialNewsExchangesApi> =
  s.object<CountryNordicFinancialNewsExchangesApi>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      iso2Code: s.optional(s.string()),
      _keysMap: {
        iso2Code: "iso2_code",
      },
    },
    { additionalProperties: s.json() },
  );
