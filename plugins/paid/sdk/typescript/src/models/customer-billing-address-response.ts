import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Customer billing address, or null when no address is set. */
export type CustomerBillingAddressResponse = {
  line1?: string;
  line2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerBillingAddressResponseSchema: Schema<CustomerBillingAddressResponse> =
  s.object<CustomerBillingAddressResponse>(
    {
      line1: s.optional(s.string()),
      line2: s.optional(s.string()),
      city: s.optional(s.string()),
      state: s.optional(s.string()),
      zipCode: s.optional(s.string()),
      country: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
