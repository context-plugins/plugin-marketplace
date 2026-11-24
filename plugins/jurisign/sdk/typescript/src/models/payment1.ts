import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1JuriSignSignRequestsApiSchema,
  type Status1JuriSignSignRequestsApi,
} from "./status1-juri-sign-sign-requests-api.js";

/**
 * Present only when a payment was requested on this sign request (see the `payment` field on
 * creation). The signer is invited to pay only after signing ("sign then pay") — `checkout_url` is
 * null until the sign request is fully signed.
 */
export type Payment1 = {
  status?: Status1JuriSignSignRequestsApi;
  amountCents?: number;
  currency?: string;
  description?: string | null;
  /**
   * Stripe Checkout link, only present while status is processing (i.e. the sign request has been
   * fully signed and the signer has not yet paid).
   */
  checkoutUrl?: string | null;
  paidAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payment1Properties: s.Shape<Payment1> = {
  status: s.optional(s.lazy(() => status1JuriSignSignRequestsApiSchema)),
  amountCents: s.optional(s.int()),
  currency: s.optional(s.string()),
  description: s.optionalNullable(s.string()),
  checkoutUrl: s.optionalNullable(s.string()),
  paidAt: s.optionalNullable(s.dateTime()),
  _keysMap: {
    amountCents: "amount_cents",
    checkoutUrl: "checkout_url",
    paidAt: "paid_at",
  },
};

export const payment1InternalSchema: Schema<Payment1> = s.object<Payment1>(payment1Properties, {
  additionalProperties: s.json(),
});

export const payment1Schema: Schema<Payment1> = s.lazySchema(() =>
  s.object<Payment1>(
    {
      ...payment1Properties,
      checkoutUrl: s.optionalNullable(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
