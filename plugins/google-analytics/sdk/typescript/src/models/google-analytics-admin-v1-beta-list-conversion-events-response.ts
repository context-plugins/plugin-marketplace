import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaConversionEventSchema,
  type GoogleAnalyticsAdminV1BetaConversionEvent,
} from "./google-analytics-admin-v1-beta-conversion-event.js";

/** Response message for ListConversionEvents RPC. */
export type GoogleAnalyticsAdminV1BetaListConversionEventsResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** The requested conversion events */
  conversionEvents?: GoogleAnalyticsAdminV1BetaConversionEvent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaListConversionEventsResponseSchema: Schema<GoogleAnalyticsAdminV1BetaListConversionEventsResponse> =
  s.object<GoogleAnalyticsAdminV1BetaListConversionEventsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      conversionEvents: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaConversionEventSchema))),
    },
    { additionalProperties: s.json() },
  );
