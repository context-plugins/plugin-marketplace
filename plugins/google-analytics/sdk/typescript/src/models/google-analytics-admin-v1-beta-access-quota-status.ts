import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Current state for a particular quota group. */
export type GoogleAnalyticsAdminV1BetaAccessQuotaStatus = {
  /** Quota consumed by this request. */
  consumed?: number;
  /** Quota remaining after this request. */
  remaining?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessQuotaStatusSchema: Schema<GoogleAnalyticsAdminV1BetaAccessQuotaStatus> =
  s.object<GoogleAnalyticsAdminV1BetaAccessQuotaStatus>(
    {
      consumed: s.optional(s.int()),
      remaining: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
