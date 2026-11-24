import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Stripe customer link, or null when no Stripe gateway account is configured. */
export type StripeConnection = {
  /** Stripe customer ID. */
  customerId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stripeConnectionSchema: Schema<StripeConnection> = s.object<StripeConnection>(
  {
    customerId: s.string(),
  },
  { additionalProperties: s.json() },
);
