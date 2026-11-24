import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1Schema,
  type GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1,
} from "./google-analytics-admin-v1-beta-access-order-by-dimension-order-by1.js";
import {
  googleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2Schema,
  type GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2,
} from "./google-analytics-admin-v1-beta-access-order-by-metric-order-by2.js";

/**
 * Order bys define how rows will be sorted in the response. For example, ordering rows by
 * descending access count is one ordering, and ordering rows by the country string is a different
 * ordering.
 */
export type GoogleAnalyticsAdminV1BetaAccessOrderBy = {
  /** If true, sorts by descending order. If false or unspecified, sorts in ascending order. */
  desc?: boolean;
  /** Sorts results by a dimension's values. */
  dimension?: GoogleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1;
  /** Sorts results by a metric's values. */
  metric?: GoogleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaAccessOrderBySchema: Schema<GoogleAnalyticsAdminV1BetaAccessOrderBy> =
  s.object<GoogleAnalyticsAdminV1BetaAccessOrderBy>(
    {
      desc: s.optional(s.boolean()),
      dimension: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessOrderByDimensionOrderBy1Schema)),
      metric: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessOrderByMetricOrderBy2Schema)),
    },
    { additionalProperties: s.json() },
  );
