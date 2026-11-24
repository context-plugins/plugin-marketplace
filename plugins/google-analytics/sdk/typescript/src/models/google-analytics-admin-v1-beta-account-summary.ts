import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaPropertySummarySchema,
  type GoogleAnalyticsAdminV1BetaPropertySummary,
} from "./google-analytics-admin-v1-beta-property-summary.js";

/**
 * A virtual resource representing an overview of an account and all its child Google Analytics
 * properties.
 */
export type GoogleAnalyticsAdminV1BetaAccountSummary = {
  /**
   * Resource name of account referred to by this account summary Format: accounts/{account_id}
   * Example: "accounts/1000"
   */
  account?: string;
  /**
   * Identifier. Resource name for this account summary. Format: accountSummaries/{account_id}
   * Example: "accountSummaries/1000"
   */
  name?: string;
  /** Display name for the account referred to in this account summary. */
  displayName?: string;
  /** List of summaries for child accounts of this account. */
  propertySummaries?: GoogleAnalyticsAdminV1BetaPropertySummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccountSummarySchema: Schema<GoogleAnalyticsAdminV1BetaAccountSummary> =
  s.object<GoogleAnalyticsAdminV1BetaAccountSummary>(
    {
      account: s.optional(s.string()),
      name: s.optional(s.string()),
      displayName: s.optional(s.string()),
      propertySummaries: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaPropertySummarySchema))),
    },
    { additionalProperties: s.json() },
  );
