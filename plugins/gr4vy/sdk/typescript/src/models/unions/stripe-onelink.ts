import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { stripeOptionsSchema, type StripeOptions } from "../stripe-options.js";

/** Custom options to be passed to the `stripe-onelink` connector. */
export type StripeOnelink = StripeOptions;

export const stripeOnelinkSchema: Schema<StripeOnelink> = s.of<StripeOnelink>(
  s.union([s.lazy(() => stripeOptionsSchema)]),
);
