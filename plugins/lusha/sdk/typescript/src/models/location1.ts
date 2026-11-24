import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Location1 = {
  city?: string;
  state?: string;
  /** Free field. ISO/postal state or region code, when available. */
  stateCode?: string;
  country?: string;
  countryIso2?: string;
  continent?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const location1Schema: Schema<Location1> = s.object<Location1>(
  {
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    stateCode: s.optional(s.string()),
    country: s.optional(s.string()),
    countryIso2: s.optional(s.string()),
    continent: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
