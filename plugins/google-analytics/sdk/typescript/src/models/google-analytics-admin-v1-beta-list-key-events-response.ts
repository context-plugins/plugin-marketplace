import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaKeyEventSchema,
  type GoogleAnalyticsAdminV1BetaKeyEvent,
} from "./google-analytics-admin-v1-beta-key-event.js";

/** Response message for ListKeyEvents RPC. */
export type GoogleAnalyticsAdminV1BetaListKeyEventsResponse = {
  /** The requested Key Events */
  keyEvents?: GoogleAnalyticsAdminV1BetaKeyEvent[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaListKeyEventsResponseSchema: Schema<GoogleAnalyticsAdminV1BetaListKeyEventsResponse> =
  s.object<GoogleAnalyticsAdminV1BetaListKeyEventsResponse>(
    {
      keyEvents: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaKeyEventSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
