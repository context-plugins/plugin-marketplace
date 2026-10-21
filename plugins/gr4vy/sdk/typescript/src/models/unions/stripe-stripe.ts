import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { stripeOptionsSchema, type StripeOptions } from "../stripe-options.js";

/** Custom options to be passed to the `stripe-stripe` connector. */
export type StripeStripe = StripeOptions;

export const stripeStripeSchema: Schema<StripeStripe> = s.of<StripeStripe>(
  s.union([s.lazy(() => stripeOptionsSchema)]),
);
