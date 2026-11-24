import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccountSummarySchema,
  type GoogleAnalyticsAdminV1BetaAccountSummary,
} from "./google-analytics-admin-v1-beta-account-summary.js";

/** Response message for ListAccountSummaries RPC. */
export type GoogleAnalyticsAdminV1BetaListAccountSummariesResponse = {
  /** Account summaries of all accounts the caller has access to. */
  accountSummaries?: GoogleAnalyticsAdminV1BetaAccountSummary[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaListAccountSummariesResponseSchema: Schema<GoogleAnalyticsAdminV1BetaListAccountSummariesResponse> =
  s.object<GoogleAnalyticsAdminV1BetaListAccountSummariesResponse>(
    {
      accountSummaries: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaAccountSummarySchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
