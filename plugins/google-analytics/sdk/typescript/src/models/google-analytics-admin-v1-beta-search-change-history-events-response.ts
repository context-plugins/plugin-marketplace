import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaChangeHistoryEventSchema,
  type GoogleAnalyticsAdminV1BetaChangeHistoryEvent,
} from "./google-analytics-admin-v1-beta-change-history-event.js";

/** Response message for SearchAccounts RPC. */
export type GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Results that were accessible to the caller. */
  changeHistoryEvents?: GoogleAnalyticsAdminV1BetaChangeHistoryEvent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponseSchema: Schema<GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse> =
  s.object<GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      changeHistoryEvents: s.optional(
        s.array(s.lazy(() => googleAnalyticsAdminV1BetaChangeHistoryEventSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
