import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Present for Checkout.com exchange sessions (Push to Card / debit card flow). Use these fields to
 * initialize the Checkout.com Flow component for card capture.
 */
export type ExternalProviderSessionData = {
  /** Checkout.com payment session ID (e.g. ps_xxx). */
  id?: string;
  /** Checkout.com payment session secret. */
  paymentSessionSecret?: string;
  /** Checkout.com payment session token (base64) for Flow initialization. */
  paymentSessionToken?: string;
};

export const externalProviderSessionDataSchema: Schema<ExternalProviderSessionData> =
  s.object<ExternalProviderSessionData>({
    id: s.optional(s.string()),
    paymentSessionSecret: s.optional(s.string()),
    paymentSessionToken: s.optional(s.string()),
    _keysMap: {
      paymentSessionSecret: "payment_session_secret",
      paymentSessionToken: "payment_session_token",
    },
  });
