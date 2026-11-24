import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Properties can use 250,000 tokens per day. Most requests consume fewer than 10 tokens. */
export type GoogleAnalyticsAdminV1BetaAccessQuotaStatus1 = {
  /** Quota consumed by this request. */
  consumed?: number;
  /** Quota remaining after this request. */
  remaining?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessQuotaStatus1Schema: Schema<GoogleAnalyticsAdminV1BetaAccessQuotaStatus1> =
  s.object<GoogleAnalyticsAdminV1BetaAccessQuotaStatus1>(
    {
      consumed: s.optional(s.int()),
      remaining: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
