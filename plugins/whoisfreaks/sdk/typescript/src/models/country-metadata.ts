import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CountryMetadata = {
  callingCode?: string;
  tld?: string;
  languages?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countryMetadataSchema: Schema<CountryMetadata> = s.object<CountryMetadata>(
  {
    callingCode: s.optional(s.string()),
    tld: s.optional(s.string()),
    languages: s.optional(s.array(s.string())),
    _keysMap: {
      callingCode: "calling_code",
    },
  },
  { additionalProperties: s.json() },
);
