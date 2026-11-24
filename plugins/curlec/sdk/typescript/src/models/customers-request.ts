import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomersRequest = {
  /**
   * Customer name. 3-50 characters. Allowed: alphanumeric, period, apostrophe, forward slash, \@,
   * parentheses.
   */
  name: string;
  /** Phone number with country code. Min 8 digits, max 15 chars. Example: +919876543210. */
  contact?: string;
  /** Email address. Max 64 characters. */
  email?: string;
  /** GST Identification Number. */
  gstin?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customersRequestProperties: s.Shape<CustomersRequest> = {
  name: s.string(),
  contact: s.optional(s.string()),
  email: s.optional(s.string()),
  gstin: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
};

export const customersRequestInternalSchema: Schema<CustomersRequest> = s.object<CustomersRequest>(
  customersRequestProperties,
  { additionalProperties: s.json() },
);

export const customersRequestSchema: Schema<CustomersRequest> = s.lazySchema(() =>
  s.object<CustomersRequest>(
    {
      ...customersRequestProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
