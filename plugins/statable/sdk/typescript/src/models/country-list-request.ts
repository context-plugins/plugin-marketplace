import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** ISO 3166-1 alpha-2 codes. Replaces both lists. */
export type CountryListRequest = {
  allowed?: string[];
  blocked?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const countryListRequestSchema: Schema<CountryListRequest> = s.object<CountryListRequest>(
  {
    allowed: s.optional(s.array(s.string())),
    blocked: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
