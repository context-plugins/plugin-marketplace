import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Residential = {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const residentialSchema: Schema<Residential> = s.object<Residential>(
  {
    street: s.optional(s.string()),
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    country: s.optional(s.string()),
    _keysMap: {
      postalCode: "postal_code",
    },
  },
  { additionalProperties: s.json() },
);
