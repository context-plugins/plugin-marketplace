import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleAnalyticsAdminV1BetaAccessDimensionHeaderSchema,
  type GoogleAnalyticsAdminV1BetaAccessDimensionHeader,
} from "./google-analytics-admin-v1-beta-access-dimension-header.js";
import {
  googleAnalyticsAdminV1BetaAccessMetricHeaderSchema,
  type GoogleAnalyticsAdminV1BetaAccessMetricHeader,
} from "./google-analytics-admin-v1-beta-access-metric-header.js";
import {
  googleAnalyticsAdminV1BetaAccessQuota2Schema,
  type GoogleAnalyticsAdminV1BetaAccessQuota2,
} from "./google-analytics-admin-v1-beta-access-quota2.js";
import {
  googleAnalyticsAdminV1BetaAccessRowSchema,
  type GoogleAnalyticsAdminV1BetaAccessRow,
} from "./google-analytics-admin-v1-beta-access-row.js";

/** The customized Data Access Record Report response. */
export type GoogleAnalyticsAdminV1BetaRunAccessReportResponse = {
  /**
   * The quota state for this Analytics property including this request. This field doesn't work
   * with account-level requests.
   */
  quota?: GoogleAnalyticsAdminV1BetaAccessQuota2;
  /**
   * The header for a column in the report that corresponds to a specific metric. The number of
   * MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.
   */
  metricHeaders?: GoogleAnalyticsAdminV1BetaAccessMetricHeader[];
  /**
   * The total number of rows in the query result. `rowCount` is independent of the number of rows
   * returned in the response, the `limit` request parameter, and the `offset` request parameter.
   * For example if a query returns 175 rows and includes `limit` of 50 in the API request, the
   * response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination
   * parameter, see
   * [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
   */
  rowCount?: number;
  /**
   * The header for a column in the report that corresponds to a specific dimension. The number of
   * DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.
   */
  dimensionHeaders?: GoogleAnalyticsAdminV1BetaAccessDimensionHeader[];
  /** Rows of dimension value combinations and metric values in the report. */
  rows?: GoogleAnalyticsAdminV1BetaAccessRow[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleAnalyticsAdminV1BetaRunAccessReportResponseSchema: Schema<GoogleAnalyticsAdminV1BetaRunAccessReportResponse> =
  s.object<GoogleAnalyticsAdminV1BetaRunAccessReportResponse>(
    {
      quota: s.optional(s.lazy(() => googleAnalyticsAdminV1BetaAccessQuota2Schema)),
      metricHeaders: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaAccessMetricHeaderSchema))),
      rowCount: s.optional(s.int()),
      dimensionHeaders: s.optional(
        s.array(s.lazy(() => googleAnalyticsAdminV1BetaAccessDimensionHeaderSchema)),
      ),
      rows: s.optional(s.array(s.lazy(() => googleAnalyticsAdminV1BetaAccessRowSchema))),
    },
    { additionalProperties: s.json() },
  );
