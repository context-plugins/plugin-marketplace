import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Sorts results by a metric's values. */
export type GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2 = {
  /** A metric name in the request to order by. */
  metricName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2Schema: Schema<GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2> =
  s.object<GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2>(
    {
      metricName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
