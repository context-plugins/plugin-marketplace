import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomersRequest1 = {
  /** Updated name. 3-50 characters. */
  name?: string;
  /** Updated phone number. Min 8 digits including country code. */
  contact?: string;
  /** Updated email. Max 64 characters. */
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customersRequest1Schema: Schema<CustomersRequest1> = s.object<CustomersRequest1>(
  {
    name: s.optional(s.string()),
    contact: s.optional(s.string()),
    email: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
