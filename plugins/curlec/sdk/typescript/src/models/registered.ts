import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Registered = {
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registeredSchema: Schema<Registered> = s.object<Registered>(
  {
    street1: s.optional(s.string()),
    street2: s.optional(s.string()),
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
