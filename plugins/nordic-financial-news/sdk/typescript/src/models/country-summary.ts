import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CountrySummary = {
  /** Unique country identifier */
  id: string;
  /** Country display name */
  name: string;
  /** ISO 3166-1 alpha-2 country code */
  iso2Code: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countrySummarySchema: Schema<CountrySummary> = s.object<CountrySummary>(
  {
    id: s.string(),
    name: s.string(),
    iso2Code: s.string(),
    _keysMap: {
      iso2Code: "iso2_code",
    },
  },
  { additionalProperties: s.json() },
);
