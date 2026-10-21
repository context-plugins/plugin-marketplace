import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { stripeOptionsSchema, type StripeOptions } from "../stripe-options.js";

/** Custom options to be passed to the `stripe-klarna` connector. */
export type StripeKlarna = StripeOptions;

export const stripeKlarnaSchema: Schema<StripeKlarna> = s.of<StripeKlarna>(
  s.union([s.lazy(() => stripeOptionsSchema)]),
);
