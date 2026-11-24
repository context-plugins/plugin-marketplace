import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaCustomMetricSchema,
  type GoogleAnalyticsAdminV1BetaCustomMetric,
} from "./google-analytics-admin-v1-beta-custom-metric.js";

/** Response message for ListCustomMetrics RPC. */
export type GoogleAnalyticsAdminV1BetaListCustomMetricsResponse = {
  /** List of CustomMetrics. */
  customMetrics?: GoogleAnalyticsAdminV1BetaCustomMetric[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaListCustomMetricsResponseSchema: Schema<GoogleAnalyticsAdminV1BetaListCustomMetricsResponse> =
  s.object<GoogleAnalyticsAdminV1BetaListCustomMetricsResponse>(
    {
      customMetrics: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaCustomMetricSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
