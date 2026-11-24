import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccountSchema,
  type GoogleAnalyticsAdminV1BetaAccount,
} from "./google-analytics-admin-v1-beta-account.js";

/** Request message for ListAccounts RPC. */
export type GoogleAnalyticsAdminV1BetaListAccountsResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Results that were accessible to the caller. */
  accounts?: GoogleAnalyticsAdminV1BetaAccount[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaListAccountsResponseSchema: Schema<GoogleAnalyticsAdminV1BetaListAccountsResponse> =
  s.object<GoogleAnalyticsAdminV1BetaListAccountsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      accounts: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaAccountSchema))),
    },
    { additionalProperties: s.json() },
  );
