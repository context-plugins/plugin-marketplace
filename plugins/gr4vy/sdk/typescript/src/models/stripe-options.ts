import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stripeConnectSchema, type StripeConnect } from "./unions/stripe-connect.js";

export type StripeOptions = {
  /** Stripe options to support Stripe Connect */
  stripeConnect?: StripeConnect;
};

export const stripeOptionsSchema: Schema<StripeOptions> = s.object<StripeOptions>({
  stripeConnect: s.optional(s.lazy(() => stripeConnectSchema)),
  _keysMap: {
    stripeConnect: "stripe_connect",
  },
});
