import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The Stripe Connect account to target using the `Stripe-Account` header. */
export type StripeAccount = string;

export const stripeAccountSchema: Schema<StripeAccount> = s.of<StripeAccount>(s.union([s.string()]));
