import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stripeConnectionSchema, type StripeConnection } from "./stripe-connection.js";

/** Linked external system IDs for this customer. */
export type CustomerConnections = {
  /** Stripe customer link, or null when no Stripe gateway account is configured. */
  stripe: StripeConnection;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerConnectionsSchema: Schema<CustomerConnections> = s.object<CustomerConnections>(
  {
    stripe: stripeConnectionSchema,
  },
  { additionalProperties: s.json() },
);
