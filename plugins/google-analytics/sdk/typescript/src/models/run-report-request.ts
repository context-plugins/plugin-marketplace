import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cohortSpec1Schema, type CohortSpec1 } from "./cohort-spec1.js";
import { comparisonSchema, type Comparison } from "./comparison.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { filterExpression5Schema, type FilterExpression5 } from "./filter-expression5.js";
import { filterExpression6Schema, type FilterExpression6 } from "./filter-expression6.js";
import { metricAggregationSchema, type MetricAggregation } from "./metric-aggregation.js";
import { metricSchema, type Metric } from "./metric.js";
import { orderBySchema, type OrderBy } from "./order-by.js";

/** The request to generate a report. */
export type RunReportRequest = {
  /**
   * The row count of the start row. The first row is counted as row 0. When paging, the first
   * request does not specify offset; or equivalently, sets offset to 0; the first request returns
   * the first `limit` of rows. The second request sets offset to the `limit` of the first request;
   * the second request returns the second `limit` of rows. To learn more about this pagination
   * parameter, see
   * [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
   */
  offset?: string;
  /**
   * Toggles whether to return the current state of this Google Analytics property's quota. Quota is
   * returned in [PropertyQuota](#PropertyQuota).
   */
  returnPropertyQuota?: boolean;
  /**
   * A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the
   * report uses the property's default currency.
   */
  currencyCode?: string;
  /**
   * Aggregation of metrics. Aggregated metric values will be shown in rows where the
   * dimension_values are set to "RESERVED_(MetricAggregation)". Aggregates including both
   * comparisons and multiple date ranges will be aggregated based on the date ranges.
   */
  metricAggregations?: MetricAggregation[];
  /**
   * Cohort group associated with this request. If there is a cohort group in the request the
   * 'cohort' dimension must be present.
   */
  cohortSpec?: CohortSpec1;
  /**
   * Dimension filters let you ask for only specific dimension values in the report. To learn more,
   * see [Fundamentals of Dimension
   * Filters](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters)
   * for examples. Metrics cannot be used in this filter.
   */
  dimensionFilter?: FilterExpression5;
  /**
   * If false or unspecified, each row with all metrics equal to 0 will not be returned. If true,
   * these rows will be returned if they are not separately removed by a filter. Regardless of this
   * `keep_empty_rows` setting, only data recorded by the Google Analytics property can be displayed
   * in a report. For example if a property never logs a `purchase` event, then a query for the
   * `eventName` dimension and `eventCount` metric will not have a row eventName: "purchase" and
   * eventCount: 0.
   */
  keepEmptyRows?: boolean;
  /** The metrics requested and displayed. */
  metrics?: Metric[];
  /**
   * The filter clause of metrics. Applied after aggregating the report's rows, similar to SQL
   * having-clause. Dimensions cannot be used in this filter.
   */
  metricFilter?: FilterExpression6;
  /** The dimensions requested and displayed. */
  dimensions?: Dimension[];
  /**
   * A Google Analytics property identifier whose events are tracked. Specified in the URL path and
   * not the body. To learn more, see [where to find your Property
   * ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a
   * batch request, this property should either be unspecified or consistent with the batch-level
   * property. Example: properties/1234
   */
  property?: string;
  /**
   * The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a
   * maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive.
   * The API can also return fewer rows than the requested `limit`, if there aren't as many
   * dimension values as the `limit`. For instance, there are fewer than 300 possible values for the
   * dimension `country`, so when reporting on only `country`, you can't get more than 300 rows,
   * even if you set `limit` to a higher value. To learn more about this pagination parameter, see
   * [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).
   */
  limit?: string;
  /**
   * Specifies how rows are ordered in the response. Requests including both comparisons and
   * multiple date ranges will have order bys applied on the comparisons.
   */
  orderBys?: OrderBy[];
  /**
   * Optional. The configuration of comparisons requested and displayed. The request only requires a
   * comparisons field in order to receive a comparison column in the response.
   */
  comparisons?: Comparison[];
  /**
   * Date ranges of data to read. If multiple date ranges are requested, each response row will
   * contain a zero based date range index. If two date ranges overlap, the event data for the
   * overlapping days is included in the response rows for both date ranges. In a cohort request,
   * this `dateRanges` must be unspecified.
   */
  dateRanges?: DateRange[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runReportRequestSchema: Schema<RunReportRequest> = s.object<RunReportRequest>(
  {
    offset: s.optional(s.string()),
    returnPropertyQuota: s.optional(s.boolean()),
    currencyCode: s.optional(s.string()),
    metricAggregations: s.optional(s.array(s.lazy(() => metricAggregationSchema))),
    cohortSpec: s.optional(s.lazy(() => cohortSpec1Schema)),
    dimensionFilter: s.optional(s.lazy(() => filterExpression5Schema)),
    keepEmptyRows: s.optional(s.boolean()),
    metrics: s.optional(s.array(s.lazy(() => metricSchema))),
    metricFilter: s.optional(s.lazy(() => filterExpression6Schema)),
    dimensions: s.optional(s.array(s.lazy(() => dimensionSchema))),
    property: s.optional(s.string()),
    limit: s.optional(s.string()),
    orderBys: s.optional(s.array(s.lazy(() => orderBySchema))),
    comparisons: s.optional(s.array(s.lazy(() => comparisonSchema))),
    dateRanges: s.optional(s.array(s.lazy(() => dateRangeSchema))),
  },
  { additionalProperties: s.json() },
);
