import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Properties can use up to 50 concurrent requests. */
export type GoogleAnalyticsAdminV1BetaAccessQuotaStatus2 = {
  /** Quota consumed by this request. */
  consumed?: number;
  /** Quota remaining after this request. */
  remaining?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessQuotaStatus2Schema: Schema<GoogleAnalyticsAdminV1BetaAccessQuotaStatus2> =
  s.object<GoogleAnalyticsAdminV1BetaAccessQuotaStatus2>(
    {
      consumed: s.optional(s.int()),
      remaining: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
