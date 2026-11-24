import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Properties can use up to 25% of their tokens per project per hour. This amounts to Analytics 360
 * Properties can use 12,500 tokens per project per hour. An API request consumes a single number of
 * tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.
 */
export type GoogleAnalyticsAdminV1BetaAccessQuotaStatus6 = {
  /** Quota consumed by this request. */
  consumed?: number;
  /** Quota remaining after this request. */
  remaining?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessQuotaStatus6Schema: Schema<GoogleAnalyticsAdminV1BetaAccessQuotaStatus6> =
  s.object<GoogleAnalyticsAdminV1BetaAccessQuotaStatus6>(
    {
      consumed: s.optional(s.int()),
      remaining: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
