import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { stripeCardOptionsSchema, type StripeCardOptions } from "../stripe-card-options.js";

/** Custom options to be passed to the `stripe-card` connector. */
export type StripeCard = StripeCardOptions;

export const stripeCardSchema: Schema<StripeCard> = s.of<StripeCard>(
  s.union([s.lazy(() => stripeCardOptionsSchema)]),
);
