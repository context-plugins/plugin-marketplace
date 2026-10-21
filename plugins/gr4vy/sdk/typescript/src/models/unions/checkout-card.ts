import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { checkoutPayoutOptionsSchema, type CheckoutPayoutOptions } from "../checkout-payout-options.js";

/** Custom options for `checkout-card` payment service. */
export type CheckoutCard = CheckoutPayoutOptions;

export const checkoutCardSchema: Schema<CheckoutCard> = s.of<CheckoutCard>(
  s.union([s.lazy(() => checkoutPayoutOptionsSchema)]),
);
