import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TopUpResponse = {
  /** The created Stripe Checkout session id. */
  sessionId: string;
  /** Hosted Stripe Checkout URL to redirect the user to for payment. */
  checkoutUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const topUpResponseSchema: Schema<TopUpResponse> = s.object<TopUpResponse>(
  {
    sessionId: s.string(),
    checkoutUrl: s.string(),
    _keysMap: {
      sessionId: "session_id",
      checkoutUrl: "checkout_url",
    },
  },
  { additionalProperties: s.json() },
);
