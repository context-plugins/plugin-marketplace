import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The quantitative measurements of a report. For example, the metric `accessCount` is the total
 * number of data access records.
 */
export type GoogleAnalyticsAdminV1BetaAccessMetric = {
  /**
   * The API name of the metric. See [Data Access
   * Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema)
   * for the list of metrics supported in this API. Metrics are referenced by name in `metricFilter`
   * & `orderBys`.
   */
  metricName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessMetricSchema: Schema<GoogleAnalyticsAdminV1BetaAccessMetric> =
  s.object<GoogleAnalyticsAdminV1BetaAccessMetric>(
    {
      metricName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
