import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Properties can use 50,000 tokens per hour. An API request consumes a single number of tokens, and
 * that number is deducted from all of the hourly, daily, and per project hourly quotas.
 */
export type GoogleAnalyticsAdminV1BetaAccessQuotaStatus4 = {
  /** Quota consumed by this request. */
  consumed?: number;
  /** Quota remaining after this request. */
  remaining?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessQuotaStatus4Schema: Schema<GoogleAnalyticsAdminV1BetaAccessQuotaStatus4> =
  s.object<GoogleAnalyticsAdminV1BetaAccessQuotaStatus4>(
    {
      consumed: s.optional(s.int()),
      remaining: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
