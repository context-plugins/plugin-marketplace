import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** What your account pays for this number type, plan-aware. */
export type NumberPricing = {
  setupFee?: number;
  monthlyFee?: number;
  perMinuteRate?: number;
  /**
   * First month at your plan's rate (setupFee is always 0). 0 when the number is included in your
   * subscription.
   */
  totalDueNow?: number;
  includedInSubscription?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const numberPricingSchema: Schema<NumberPricing> = s.object<NumberPricing>(
  {
    setupFee: s.optional(s.float64()),
    monthlyFee: s.optional(s.float64()),
    perMinuteRate: s.optional(s.float64()),
    totalDueNow: s.optional(s.float64()),
    includedInSubscription: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
