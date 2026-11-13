import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BillingPortalUrlResponse = {
  /** Stripe customer portal URL to send the user to. */
  billingPortalUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const billingPortalUrlResponseProperties: s.Shape<BillingPortalUrlResponse> = {
  billingPortalUrl: s.string(),
  _keysMap: {
    billingPortalUrl: "billing_portal_url",
  },
};

export const billingPortalUrlResponseInternalSchema: Schema<BillingPortalUrlResponse> =
  s.object<BillingPortalUrlResponse>(billingPortalUrlResponseProperties, { additionalProperties: s.json() });

export const billingPortalUrlResponseSchema: Schema<BillingPortalUrlResponse> = s.lazySchema(() =>
  s.object<BillingPortalUrlResponse>(
    {
      ...billingPortalUrlResponseProperties,
      billingPortalUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
