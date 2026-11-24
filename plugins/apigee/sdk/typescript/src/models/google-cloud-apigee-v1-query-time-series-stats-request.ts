import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1MetricAggregationSchema,
  type GoogleCloudApigeeV1MetricAggregation,
} from "./google-cloud-apigee-v1-metric-aggregation.js";
import { googleTypeInterval2Schema, type GoogleTypeInterval2 } from "./google-type-interval2.js";
import { timestampOrderSchema, type TimestampOrder } from "./timestamp-order.js";
import { windowSizeSchema, type WindowSize } from "./window-size.js";

/**
 * QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences
 * grouped by their values.
 */
export type GoogleCloudApigeeV1QueryTimeSeriesStatsRequest = {
  /** Required. Time range for the stats. */
  timeRange?: GoogleTypeInterval2;
  /**
   * Page size represents the number of time series sequences, one per unique set of dimensions and
   * their values.
   */
  pageSize?: number;
  /**
   * List of dimension names to group the aggregations by. If no dimensions are passed, a single
   * trend line representing the requested metric aggregations grouped by environment is returned.
   */
  dimensions?: string[];
  /** Required. List of metrics and their aggregations. */
  metrics?: GoogleCloudApigeeV1MetricAggregation[];
  /** Page token stands for a specific collection of time series sequences. */
  pageToken?: string;
  /** Time buckets to group the stats by. */
  windowSize?: WindowSize;
  /**
   * Order the sequences in increasing or decreasing order of timestamps. Default is descending
   * order of timestamps (latest first).
   */
  timestampOrder?: TimestampOrder;
  /**
   * Filter further on specific dimension values. Follows the same grammar as custom report's filter
   * expressions. Example, apiproxy eq 'foobar'.
   * https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters
   */
  filter?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1QueryTimeSeriesStatsRequestSchema: Schema<GoogleCloudApigeeV1QueryTimeSeriesStatsRequest> =
  s.object<GoogleCloudApigeeV1QueryTimeSeriesStatsRequest>(
    {
      timeRange: s.optional(s.lazy(() => googleTypeInterval2Schema)),
      pageSize: s.optional(s.int()),
      dimensions: s.optional(s.array(s.string())),
      metrics: s.optional(s.array(s.lazy(() => googleCloudApigeeV1MetricAggregationSchema))),
      pageToken: s.optional(s.string()),
      windowSize: s.optional(s.lazy(() => windowSizeSchema)),
      timestampOrder: s.optional(s.lazy(() => timestampOrderSchema)),
      filter: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
