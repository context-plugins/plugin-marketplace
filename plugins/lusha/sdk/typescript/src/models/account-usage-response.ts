import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditsUsageSchema, type CreditsUsage } from "./credits-usage.js";
import { planInfoSchema, type PlanInfo } from "./plan-info.js";
import { pricingEntrySchema, type PricingEntry } from "./pricing-entry.js";
import { rateLimitsSchema, type RateLimits } from "./rate-limits.js";

export type AccountUsageResponse = {
  credits?: CreditsUsage;
  rateLimits?: RateLimits;
  plan?: PlanInfo;
  pricing?: Record<string, PricingEntry>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountUsageResponseSchema: Schema<AccountUsageResponse> = s.object<AccountUsageResponse>(
  {
    credits: s.optional(s.lazy(() => creditsUsageSchema)),
    rateLimits: s.optional(s.lazy(() => rateLimitsSchema)),
    plan: s.optional(s.lazy(() => planInfoSchema)),
    pricing: s.optional(
      s.record(
        s.string(),
        s.lazy(() => pricingEntrySchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
