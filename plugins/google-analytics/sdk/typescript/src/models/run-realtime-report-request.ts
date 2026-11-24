import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { filterExpression7Schema, type FilterExpression7 } from "./filter-expression7.js";
import { filterExpression8Schema, type FilterExpression8 } from "./filter-expression8.js";
import { metricAggregationSchema, type MetricAggregation } from "./metric-aggregation.js";
import { metricSchema, type Metric } from "./metric.js";
import { minuteRangeSchema, type MinuteRange } from "./minute-range.js";
import { orderBySchema, type OrderBy } from "./order-by.js";

/** The request to generate a realtime report. */
export type RunRealtimeReportRequest = {
  /** Specifies how rows are ordered in the response. */
  orderBys?: OrderBy[];
  /**
   * The minute ranges of event data to read. If unspecified, one minute range for the last 30
   * minutes will be used. If multiple minute ranges are requested, each response row will contain a
   * zero based minute range index. If two minute ranges overlap, the event data for the overlapping
   * minutes is included in the response rows for both minute ranges.
   */
  minuteRanges?: MinuteRange[];
  /** The dimensions requested and displayed. */
  dimensions?: Dimension[];
  /**
   * Aggregation of metrics. Aggregated metric values will be shown in rows where the
   * dimension_values are set to "RESERVED_(MetricAggregation)".
   */
  metricAggregations?: MetricAggregation[];
  /**
   * The filter clause of metrics. Applied at post aggregation phase, similar to SQL having-clause.
   * Dimensions cannot be used in this filter.
   */
  metricFilter?: FilterExpression7;
  /**
   * The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a
   * maximum of 250,000 rows per request, no matter how many you ask for. `limit` must be positive.
   * The API can also return fewer rows than the requested `limit`, if there aren't as many
   * dimension values as the `limit`. For instance, there are fewer than 300 possible values for the
   * dimension `country`, so when reporting on only `country`, you can't get more than 300 rows,
   * even if you set `limit` to a higher value.
   */
  limit?: string;
  /** The filter clause of dimensions. Metrics cannot be used in this filter. */
  dimensionFilter?: FilterExpression8;
  /** The metrics requested and displayed. */
  metrics?: Metric[];
  /**
   * Toggles whether to return the current state of this Google Analytics property's Realtime quota.
   * Quota is returned in [PropertyQuota](#PropertyQuota).
   */
  returnPropertyQuota?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runRealtimeReportRequestSchema: Schema<RunRealtimeReportRequest> =
  s.object<RunRealtimeReportRequest>(
    {
      orderBys: s.optional(s.array(s.lazy(() => orderBySchema))),
      minuteRanges: s.optional(s.array(s.lazy(() => minuteRangeSchema))),
      dimensions: s.optional(s.array(s.lazy(() => dimensionSchema))),
      metricAggregations: s.optional(s.array(s.lazy(() => metricAggregationSchema))),
      metricFilter: s.optional(s.lazy(() => filterExpression7Schema)),
      limit: s.optional(s.string()),
      dimensionFilter: s.optional(s.lazy(() => filterExpression8Schema)),
      metrics: s.optional(s.array(s.lazy(() => metricSchema))),
      returnPropertyQuota: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
