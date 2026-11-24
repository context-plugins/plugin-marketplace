import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnrichedAddress = {
  country?: string;
  state?: string;
  city?: string;
  region?: string;
  address?: string;
  zipcode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrichedAddressSchema: Schema<EnrichedAddress> = s.object<EnrichedAddress>(
  {
    country: s.optional(s.string()),
    state: s.optional(s.string()),
    city: s.optional(s.string()),
    region: s.optional(s.string()),
    address: s.optional(s.string()),
    zipcode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
