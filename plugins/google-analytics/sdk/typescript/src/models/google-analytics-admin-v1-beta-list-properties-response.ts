import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaPropertySchema,
  type GoogleAnalyticsAdminV1BetaProperty,
} from "./google-analytics-admin-v1-beta-property.js";

/** Response message for ListProperties RPC. */
export type GoogleAnalyticsAdminV1BetaListPropertiesResponse = {
  /** Results that matched the filter criteria and were accessible to the caller. */
  properties?: GoogleAnalyticsAdminV1BetaProperty[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaListPropertiesResponseSchema: Schema<GoogleAnalyticsAdminV1BetaListPropertiesResponse> =
  s.object<GoogleAnalyticsAdminV1BetaListPropertiesResponse>(
    {
      properties: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaPropertySchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
