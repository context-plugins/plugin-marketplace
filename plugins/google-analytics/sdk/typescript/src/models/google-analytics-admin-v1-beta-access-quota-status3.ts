import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Properties and cloud project pairs can have up to 50 server errors per hour. */
export type GoogleAnalyticsAdminV1BetaAccessQuotaStatus3 = {
  /** Quota consumed by this request. */
  consumed?: number;
  /** Quota remaining after this request. */
  remaining?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessQuotaStatus3Schema: Schema<GoogleAnalyticsAdminV1BetaAccessQuotaStatus3> =
  s.object<GoogleAnalyticsAdminV1BetaAccessQuotaStatus3>(
    {
      consumed: s.optional(s.int()),
      remaining: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
