import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Country where the company is domiciled */
export type Country = {
  /** Country identifier */
  id?: string;
  /** Country name */
  name?: string;
  /** ISO 3166-1 alpha-2 code */
  iso2Code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countrySchema: Schema<Country> = s.object<Country>(
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
