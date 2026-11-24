import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1AccountStatusResponse = {
  apiAccess?: boolean;
  /**
   * Null when api_access is true, else one of key_expired, credits_depleted, subscription_expired,
   * trial_daily_limit, monthly_billing_limit, monthly_quota_exhausted.
   */
  blockedReason?: Record<string, unknown>;
  credits?: Record<string, unknown>;
  /** Human-readable reason, or null. */
  message?: Record<string, unknown>;
  /** Seconds until the block may clear. Present only when blocked. */
  retryAfter?: number;
  subscription?: Record<string, unknown>;
  trial?: Record<string, unknown>;
  usage?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AccountStatusResponseSchema: Schema<ApiV1AccountStatusResponse> =
  s.object<ApiV1AccountStatusResponse>(
    {
      apiAccess: s.optional(s.boolean()),
      blockedReason: s.optional(s.record(s.string(), s.unknown())),
      credits: s.optional(s.record(s.string(), s.unknown())),
      message: s.optional(s.record(s.string(), s.unknown())),
      retryAfter: s.optional(s.int()),
      subscription: s.optional(s.record(s.string(), s.unknown())),
      trial: s.optional(s.record(s.string(), s.unknown())),
      usage: s.optional(s.record(s.string(), s.unknown())),
      _keysMap: {
        apiAccess: "api_access",
        blockedReason: "blocked_reason",
        retryAfter: "retry_after",
      },
    },
    { additionalProperties: s.json() },
  );
