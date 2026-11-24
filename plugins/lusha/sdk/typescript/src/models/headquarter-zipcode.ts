import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type HeadquarterZipcode = {
  countryIso2?: string;
  zipcode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const headquarterZipcodeSchema: Schema<HeadquarterZipcode> = s.object<HeadquarterZipcode>(
  {
    countryIso2: s.optional(s.string()),
    zipcode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
