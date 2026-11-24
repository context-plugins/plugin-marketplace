import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccessQuotaStatus1Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuotaStatus1,
} from "./google-analytics-admin-v1-beta-access-quota-status1.js";
import {
  googleAnalyticsAdminV1BetaAccessQuotaStatus2Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuotaStatus2,
} from "./google-analytics-admin-v1-beta-access-quota-status2.js";
import {
  googleAnalyticsAdminV1BetaAccessQuotaStatus3Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuotaStatus3,
} from "./google-analytics-admin-v1-beta-access-quota-status3.js";
import {
  googleAnalyticsAdminV1BetaAccessQuotaStatus4Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuotaStatus4,
} from "./google-analytics-admin-v1-beta-access-quota-status4.js";
import {
  googleAnalyticsAdminV1BetaAccessQuotaStatus6Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuotaStatus6,
} from "./google-analytics-admin-v1-beta-access-quota-status6.js";

/**
 * The quota state for this Analytics property including this request. This field doesn't work with
 * account-level requests.
 */
export type GoogleAnalyticsAdminV1BetaAccessQuota2 = {
  /**
   * Properties can use up to 25% of their tokens per project per hour. This amounts to Analytics
   * 360 Properties can use 12,500 tokens per project per hour. An API request consumes a single
   * number of tokens, and that number is deducted from all of the hourly, daily, and per project
   * hourly quotas.
   */
  tokensPerProjectPerHour?: GoogleAnalyticsAdminV1BetaAccessQuotaStatus6;
  /** Properties can use 250,000 tokens per day. Most requests consume fewer than 10 tokens. */
  tokensPerDay?: GoogleAnalyticsAdminV1BetaAccessQuotaStatus1;
  /** Properties can use up to 50 concurrent requests. */
  concurrentRequests?: GoogleAnalyticsAdminV1BetaAccessQuotaStatus2;
  /** Properties and cloud project pairs can have up to 50 server errors per hour. */
  serverErrorsPerProjectPerHour?: GoogleAnalyticsAdminV1BetaAccessQuotaStatus3;
  /**
   * Properties can use 50,000 tokens per hour. An API request consumes a single number of tokens,
   * and that number is deducted from all of the hourly, daily, and per project hourly quotas.
   */
  tokensPerHour?: GoogleAnalyticsAdminV1BetaAccessQuotaStatus4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessQuota2Schema: Schema<GoogleAnalyticsAdminV1BetaAccessQuota2> =
  s.object<GoogleAnalyticsAdminV1BetaAccessQuota2>(
    {
      tokensPerProjectPerHour: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessQuotaStatus6Schema)),
      tokensPerDay: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessQuotaStatus1Schema)),
      concurrentRequests: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessQuotaStatus2Schema)),
      serverErrorsPerProjectPerHour: s.optional(
        s.lazy(() => googleAnalyticsAdminV1BetaAccessQuotaStatus3Schema),
      ),
      tokensPerHour: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessQuotaStatus4Schema)),
    },
    { additionalProperties: s.json() },
  );
