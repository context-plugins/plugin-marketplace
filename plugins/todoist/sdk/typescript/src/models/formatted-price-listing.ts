import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingCycleSchema, type BillingCycle } from "./billing-cycle.js";
import { formattedPriceSchema, type FormattedPrice } from "./formatted-price.js";

export type FormattedPriceListing = {
  /** Billing cycle for the listed prices. */
  billingCycle: BillingCycle;
  /** Prices available for the billing cycle. */
  prices: FormattedPrice[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formattedPriceListingSchema: Schema<FormattedPriceListing> = s.object<FormattedPriceListing>(
  {
    billingCycle: billingCycleSchema,
    prices: s.array(s.lazy(() => formattedPriceSchema)),
    _keysMap: {
      billingCycle: "billing_cycle",
    },
  },
  { additionalProperties: s.json() },
);
