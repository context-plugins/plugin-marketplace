import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** ISO 3166-1 alpha-2 country code filters. */
export type VisitorCountries = {
  include?: string[];
  exclude?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const visitorCountriesSchema: Schema<VisitorCountries> = s.object<VisitorCountries>(
  {
    include: s.optional(s.array(s.string())),
    exclude: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
