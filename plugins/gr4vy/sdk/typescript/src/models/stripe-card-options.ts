import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerIdSchema, type CustomerId } from "./unions/customer-id.js";
import {
  errorOnRequiresActionSchema,
  type ErrorOnRequiresAction,
} from "./unions/error-on-requires-action.js";
import { stripeConnectSchema, type StripeConnect } from "./unions/stripe-connect.js";

export type StripeCardOptions = {
  /** Stripe options to support Stripe Connect */
  stripeConnect?: StripeConnect;
  /**
   * A Stripe customer ID (`cus_xxx`) to associate with the PaymentIntent for network token
   * transactions. When provided, Stripe Radar can access the customer's payment history, dispute
   * rate, and account age to improve risk scoring for returning customers.
   */
  customerId?: CustomerId;
  /**
   * Passes the `error_on_requires_action` option to the Stripe API. Set to true to fail the payment
   * attempt if it transitions into requires_action. Use this parameter for simpler integrations
   * that don't handle customer actions, such as saving cards without authentication.
   */
  errorOnRequiresAction?: ErrorOnRequiresAction;
};

export const stripeCardOptionsSchema: Schema<StripeCardOptions> = s.object<StripeCardOptions>({
  stripeConnect: s.optional(s.lazy(() => stripeConnectSchema)),
  customerId: s.optional(s.lazy(() => customerIdSchema)),
  errorOnRequiresAction: s.optional(s.lazy(() => errorOnRequiresActionSchema)),
  _keysMap: {
    stripeConnect: "stripe_connect",
    customerId: "customer_id",
    errorOnRequiresAction: "error_on_requires_action",
  },
});
