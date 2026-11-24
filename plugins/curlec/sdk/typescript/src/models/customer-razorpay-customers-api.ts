import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entity1Schema, type Entity1 } from "./entity1.js";

export type CustomerRazorpayCustomersApi = {
  /** Unique customer identifier. Prefix: cust_ */
  id?: string;
  entity?: Entity1;
  /**
   * Customer name. 3-50 characters. Allowed: alphanumeric, period, apostrophe, forward slash, \@,
   * parentheses.
   */
  name?: string;
  /**
   * Phone number. Max 15 characters. Include country code (e.g. +919876543210). Minimum 8 digits.
   */
  contact?: string;
  /** Email address. Max 64 characters. */
  email?: string;
  /** Goods and Services Tax Identification Number (optional). */
  gstin?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Unix timestamp of customer creation. */
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customerRazorpayCustomersApiProperties: s.Shape<CustomerRazorpayCustomersApi> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity1Schema)),
  name: s.optional(s.string()),
  contact: s.optional(s.string()),
  email: s.optional(s.string()),
  gstin: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
  createdAt: s.optional(s.int()),
  _keysMap: {
    createdAt: "created_at",
  },
};

export const customerRazorpayCustomersApiInternalSchema: Schema<CustomerRazorpayCustomersApi> =
  s.object<CustomerRazorpayCustomersApi>(customerRazorpayCustomersApiProperties, {
    additionalProperties: s.json(),
  });

export const customerRazorpayCustomersApiSchema: Schema<CustomerRazorpayCustomersApi> = s.lazySchema(() =>
  s.object<CustomerRazorpayCustomersApi>(
    {
      ...customerRazorpayCustomersApiProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
