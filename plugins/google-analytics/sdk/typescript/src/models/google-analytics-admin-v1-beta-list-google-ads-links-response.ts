import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaGoogleAdsLinkSchema,
  type GoogleAnalyticsAdminV1BetaGoogleAdsLink,
} from "./google-analytics-admin-v1-beta-google-ads-link.js";

/** Response message for ListGoogleAdsLinks RPC. */
export type GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse = {
  /** List of GoogleAdsLinks. */
  googleAdsLinks?: GoogleAnalyticsAdminV1BetaGoogleAdsLink[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaListGoogleAdsLinksResponseSchema: Schema<GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse> =
  s.object<GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse>(
    {
      googleAdsLinks: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaGoogleAdsLinkSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
