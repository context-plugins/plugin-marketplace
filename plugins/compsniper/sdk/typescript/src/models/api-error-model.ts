import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiErrorModel = {
  error?: string;
  code?: string;
  /** Seconds before a temporary rate_limited request may be retried. */
  retryAfter?: number;
  /** Billing-cycle reset for quota_exceeded. */
  resetAt?: Date;
  plan?: string;
  quota?: number;
  used?: number;
  remaining?: number;
  /** Temporary carried-over requests remaining. */
  rolloverBalance?: number;
  /** Plan-management URL for quota_exceeded. */
  upgradeUrl?: string;
  /** Non-expiring purchased credits remaining. */
  creditBalance?: number;
  /** Credit purchase URL for quota_exceeded. */
  purchaseCreditsUrl?: string;
  /** Shipping Rates plan URL for shipping_subscription_required or shipping_quota_exceeded. */
  subscriptionUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiErrorModelProperties: s.Shape<ApiErrorModel> = {
  error: s.optional(s.string()),
  code: s.optional(s.string()),
  retryAfter: s.optional(s.int()),
  resetAt: s.optional(s.dateTime()),
  plan: s.optional(s.string()),
  quota: s.optional(s.int()),
  used: s.optional(s.int()),
  remaining: s.optional(s.int()),
  rolloverBalance: s.optional(s.int()),
  upgradeUrl: s.optional(s.string()),
  creditBalance: s.optional(s.int()),
  purchaseCreditsUrl: s.optional(s.string()),
  subscriptionUrl: s.optional(s.string()),
  _keysMap: {
    retryAfter: "retry_after",
    resetAt: "reset_at",
    rolloverBalance: "rollover_balance",
    upgradeUrl: "upgrade_url",
    creditBalance: "credit_balance",
    purchaseCreditsUrl: "purchase_credits_url",
    subscriptionUrl: "subscription_url",
  },
};

export const apiErrorModelInternalSchema: Schema<ApiErrorModel> = s.object<ApiErrorModel>(
  apiErrorModelProperties,
  { additionalProperties: s.json() },
);

export const apiErrorModelSchema: Schema<ApiErrorModel> = s.lazySchema(() =>
  s.object<ApiErrorModel>(
    {
      ...apiErrorModelProperties,
      upgradeUrl: s.optional(s.string().check(s.url())),
      purchaseCreditsUrl: s.optional(s.string().check(s.url())),
      subscriptionUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
