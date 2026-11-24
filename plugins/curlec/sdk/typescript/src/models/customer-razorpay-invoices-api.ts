import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Inline customer details. Used when no customer_id is available. */
export type CustomerRazorpayInvoicesApi = {
  name?: string;
  email?: string;
  contact?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerRazorpayInvoicesApiSchema: Schema<CustomerRazorpayInvoicesApi> =
  s.object<CustomerRazorpayInvoicesApi>(
    {
      name: s.optional(s.string()),
      email: s.optional(s.string()),
      contact: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
