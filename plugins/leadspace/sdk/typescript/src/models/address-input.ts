import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AddressInput = {
  country?: string;
  state?: string;
  city?: string;
  street?: string;
  postalcode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addressInputSchema: Schema<AddressInput> = s.object<AddressInput>(
  {
    country: s.optional(s.string()),
    state: s.optional(s.string()),
    city: s.optional(s.string()),
    street: s.optional(s.string()),
    postalcode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
