import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { braintreeOptionsSchema, type BraintreeOptions } from "../braintree-options.js";

/** Custom options to be passed to the `braintree-card` connector. */
export type BraintreeCard = BraintreeOptions;

export const braintreeCardSchema: Schema<BraintreeCard> = s.of<BraintreeCard>(
  s.union([s.lazy(() => braintreeOptionsSchema)]),
);
