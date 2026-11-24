import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CountryEntry = {
  /** ISO 3166-1 alpha-2. */
  code: string;
  /** When the country was added to the list. */
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countryEntrySchema: Schema<CountryEntry> = s.object<CountryEntry>(
  {
    code: s.string(),
    createdAt: s.dateTime(),
    _keysMap: {
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
