import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countryEntrySchema, type CountryEntry } from "./country-entry.js";

/**
 * The stored lists, as GET returns them. Note the deliberate asymmetry with the PUT body: writes
 * take bare ISO codes, reads return one entry per country with the time it was added. Both keys are
 * always present; an empty list is [].
 */
export type CountryList = {
  allowed: CountryEntry[];
  blocked: CountryEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countryListSchema: Schema<CountryList> = s.object<CountryList>(
  {
    allowed: s.array(s.lazy(() => countryEntrySchema)),
    blocked: s.array(s.lazy(() => countryEntrySchema)),
  },
  { additionalProperties: s.json() },
);
