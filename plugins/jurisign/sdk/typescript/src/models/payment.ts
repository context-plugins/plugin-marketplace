import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Request a payment from the signer once they've signed ("sign then pay" — the signature is never
 * blocked by payment). Requires an active Stripe Connect account for your organization (see
 * Settings > Paiement à la signature), or the request is rejected with a 422. JuriSign never holds
 * the funds: they go directly to your own Stripe account, minus a fixed 0.90€ platform fee.
 */
export type Payment = {
  /** Amount to collect from the signer, in cents. */
  amountCents: number;
  /** @default "eur" */
  currency?: string;
  description?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentProperties: s.Shape<Payment> = {
  amountCents: s.int(),
  currency: s.defaulted(s.string(), "eur"),
  description: s.optionalNullable(s.string()),
  _keysMap: {
    amountCents: "amount_cents",
  },
};

export const paymentInternalSchema: Schema<Payment> = s.object<Payment>(paymentProperties, {
  additionalProperties: s.json(),
});

export const paymentSchema: Schema<Payment> = s.lazySchema(() =>
  s.object<Payment>(
    {
      ...paymentProperties,
      amountCents: s.int().check(s.gte(50)),
      description: s.optionalNullable(s.string().check(s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);
