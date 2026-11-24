import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LocationsZipcode = {
  countryIso2?: string;
  zipcode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationsZipcodeSchema: Schema<LocationsZipcode> = s.object<LocationsZipcode>(
  {
    countryIso2: s.optional(s.string()),
    zipcode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
