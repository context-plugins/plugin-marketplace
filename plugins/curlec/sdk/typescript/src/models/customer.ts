import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Customer = {
  contact?: string;
  name?: string;
  email?: string;
  customerId?: string;
  addresses?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerSchema: Schema<Customer> = s.object<Customer>(
  {
    contact: s.optional(s.string()),
    name: s.optional(s.string()),
    email: s.optional(s.string()),
    customerId: s.optional(s.string()),
    addresses: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      customerId: "customer_id",
    },
  },
  { additionalProperties: s.json() },
);
