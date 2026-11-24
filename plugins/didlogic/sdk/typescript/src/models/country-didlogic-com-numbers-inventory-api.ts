import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CountryDidlogicComNumbersInventoryApi = {
  /** Country identifier */
  id: number;
  /** Country name */
  name: string;
  /** ISO 3166-1 alpha-2 country code */
  shortName: string;
  /** Whether country has states or provinces */
  hasProvincesOrStates: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countryDidlogicComNumbersInventoryApiSchema: Schema<CountryDidlogicComNumbersInventoryApi> =
  s.object<CountryDidlogicComNumbersInventoryApi>(
    {
      id: s.int(),
      name: s.string(),
      shortName: s.string(),
      hasProvincesOrStates: s.boolean(),
      _keysMap: {
        shortName: "short_name",
        hasProvincesOrStates: "has_provinces_or_states",
      },
    },
    { additionalProperties: s.json() },
  );
