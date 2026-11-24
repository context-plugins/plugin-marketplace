import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomersExternalPaymentMethodsRequest = {
  /** Stripe confirmation token for the payment method */
  confirmationToken: string;
  /** URL to redirect to after payment method setup */
  returnUrl: string;
  /** Optional metadata to attach to the payment method */
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customersExternalPaymentMethodsRequestSchema: Schema<CustomersExternalPaymentMethodsRequest> =
  s.object<CustomersExternalPaymentMethodsRequest>(
    {
      confirmationToken: s.string(),
      returnUrl: s.string(),
      metadata: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
