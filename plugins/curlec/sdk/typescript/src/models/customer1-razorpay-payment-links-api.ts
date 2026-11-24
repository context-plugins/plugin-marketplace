import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Customer contact details. Not auto-populated on checkout — customer must enter manually. */
export type Customer1RazorpayPaymentLinksApi = {
  name?: string;
  email?: string;
  contact?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customer1RazorpayPaymentLinksApiSchema: Schema<Customer1RazorpayPaymentLinksApi> =
  s.object<Customer1RazorpayPaymentLinksApi>(
    {
      name: s.optional(s.string()),
      email: s.optional(s.string()),
      contact: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
