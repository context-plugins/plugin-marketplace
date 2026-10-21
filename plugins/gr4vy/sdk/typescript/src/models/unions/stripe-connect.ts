import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { stripeConnectOptionsSchema, type StripeConnectOptions } from "../stripe-connect-options.js";

/** Stripe options to support Stripe Connect */
export type StripeConnect = StripeConnectOptions;

export const stripeConnectSchema: Schema<StripeConnect> = s.of<StripeConnect>(
  s.union([s.lazy(() => stripeConnectOptionsSchema)]),
);
