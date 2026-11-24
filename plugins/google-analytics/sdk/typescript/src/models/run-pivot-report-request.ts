import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cohortSpec1Schema, type CohortSpec1 } from "./cohort-spec1.js";
import { comparisonSchema, type Comparison } from "./comparison.js";
import { dateRangeSchema, type DateRange } from "./date-range.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { filterExpression2Schema, type FilterExpression2 } from "./filter-expression2.js";
import { filterExpression4Schema, type FilterExpression4 } from "./filter-expression4.js";
import { metricSchema, type Metric } from "./metric.js";
import { pivotSchema, type Pivot } from "./pivot.js";

/** The request to generate a pivot report. */
export type RunPivotReportRequest = {
  /**
   * The filter clause of metrics. Applied at post aggregation phase, similar to SQL having-clause.
   * Metrics must be requested to be used in this filter. Dimensions cannot be used in this filter.
   */
  metricFilter?: FilterExpression2;
  /**
   * If false or unspecified, each row with all metrics equal to 0 will not be returned. If true,
   * these rows will be returned if they are not separately removed by a filter. Regardless of this
   * `keep_empty_rows` setting, only data recorded by the Google Analytics property can be displayed
   * in a report. For example if a property never logs a `purchase` event, then a query for the
   * `eventName` dimension and `eventCount` metric will not have a row eventName: "purchase" and
   * eventCount: 0.
   */
  keepEmptyRows?: boolean;
  /**
   * A Google Analytics property identifier whose events are tracked. Specified in the URL path and
   * not the body. To learn more, see [where to find your Property
   * ID](https://developers.google.com/analytics/devguides/reporting/data/v1/property-id). Within a
   * batch request, this property should either be unspecified or consistent with the batch-level
   * property. Example: properties/1234
   */
  property?: string;
  /**
   * Describes the visual format of the report's dimensions in columns or rows. The union of the
   * fieldNames (dimension names) in all pivots must be a subset of dimension names defined in
   * Dimensions. No two pivots can share a dimension. A dimension is only visible if it appears in a
   * pivot.
   */
  pivots?: Pivot[];
  /**
   * Optional. The configuration of comparisons requested and displayed. The request requires both a
   * comparisons field and a comparisons dimension to receive a comparison column in the response.
   */
  comparisons?: Comparison[];
  /**
   * Cohort group associated with this request. If there is a cohort group in the request the
   * 'cohort' dimension must be present.
   */
  cohortSpec?: CohortSpec1;
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
   * The dimensions requested. All defined dimensions must be used by one of the following:
   * dimension_expression, dimension_filter, pivots, order_bys.
   */
  dimensions?: Dimension[];
  /**
   * The metrics requested, at least one metric needs to be specified. All defined metrics must be
   * used by one of the following: metric_expression, metric_filter, order_bys.
   */
  metrics?: Metric[];
  /**
   * The filter clause of dimensions. Dimensions must be requested to be used in this filter.
   * Metrics cannot be used in this filter.
   */
  dimensionFilter?: FilterExpression4;
  /**
   * The date range to retrieve event data for the report. If multiple date ranges are specified,
   * event data from each date range is used in the report. A special dimension with field name
   * "dateRange" can be included in a Pivot's field names; if included, the report compares between
   * date ranges. In a cohort request, this `dateRanges` must be unspecified.
   */
  dateRanges?: DateRange[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runPivotReportRequestSchema: Schema<RunPivotReportRequest> = s.object<RunPivotReportRequest>(
  {
    metricFilter: s.optional(s.lazy(() => filterExpression2Schema)),
    keepEmptyRows: s.optional(s.boolean()),
    property: s.optional(s.string()),
    pivots: s.optional(s.array(s.lazy(() => pivotSchema))),
    comparisons: s.optional(s.array(s.lazy(() => comparisonSchema))),
    cohortSpec: s.optional(s.lazy(() => cohortSpec1Schema)),
    returnPropertyQuota: s.optional(s.boolean()),
    currencyCode: s.optional(s.string()),
    dimensions: s.optional(s.array(s.lazy(() => dimensionSchema))),
    metrics: s.optional(s.array(s.lazy(() => metricSchema))),
    dimensionFilter: s.optional(s.lazy(() => filterExpression4Schema)),
    dateRanges: s.optional(s.array(s.lazy(() => dateRangeSchema))),
  },
  { additionalProperties: s.json() },
);
