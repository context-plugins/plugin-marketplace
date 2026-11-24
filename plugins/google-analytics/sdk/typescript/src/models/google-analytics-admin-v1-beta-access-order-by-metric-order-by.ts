import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Sorts by metric values. */
export type GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy = {
  /** A metric name in the request to order by. */
  metricName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessOrderByMetricOrderBySchema: Schema<GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy> =
  s.object<GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy>(
    {
      metricName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
