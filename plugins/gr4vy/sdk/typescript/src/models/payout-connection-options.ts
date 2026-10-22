import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkoutCardSchema, type CheckoutCard } from "./unions/checkout-card.js";

export type PayoutConnectionOptions = {
  /** Custom options for `checkout-card` payment service. */
  checkoutCard?: CheckoutCard;
};

export const payoutConnectionOptionsSchema: Schema<PayoutConnectionOptions> =
  s.object<PayoutConnectionOptions>({
    checkoutCard: s.optional(s.lazy(() => checkoutCardSchema)),
    _keysMap: {
      checkoutCard: "checkout-card",
    },
  });
