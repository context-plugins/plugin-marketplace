import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Customer1 = {
  contact: string;
  name?: string;
  email?: string;
  customerId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customer1Schema: Schema<Customer1> = s.object<Customer1>(
  {
    contact: s.string(),
    name: s.optional(s.string()),
    email: s.optional(s.string()),
    customerId: s.optional(s.string()),
    _keysMap: {
      customerId: "customer_id",
    },
  },
  { additionalProperties: s.json() },
);
