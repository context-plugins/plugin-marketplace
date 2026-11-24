import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Customer contact details. These are not auto-populated on the checkout page — customer must enter
 * them manually.
 */
export type CustomerRazorpayPaymentLinksApi = {
  name?: string;
  email?: string;
  contact?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerRazorpayPaymentLinksApiSchema: Schema<CustomerRazorpayPaymentLinksApi> =
  s.object<CustomerRazorpayPaymentLinksApi>(
    {
      name: s.optional(s.string()),
      email: s.optional(s.string()),
      contact: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
