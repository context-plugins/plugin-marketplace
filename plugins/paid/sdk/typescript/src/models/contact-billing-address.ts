import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContactBillingAddress = {
  street?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactBillingAddressSchema: Schema<ContactBillingAddress> = s.object<ContactBillingAddress>(
  {
    street: s.optional(s.string()),
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    country: s.optional(s.string()),
    zipCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
