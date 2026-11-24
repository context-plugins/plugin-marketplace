import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1MetricAggregationSchema,
  type GoogleCloudApigeeV1MetricAggregation,
} from "./google-cloud-apigee-v1-metric-aggregation.js";
import { googleTypeInterval3Schema, type GoogleTypeInterval3 } from "./google-type-interval3.js";

/** Request payload representing the query to be run for fetching security statistics as rows. */
export type GoogleCloudApigeeV1QueryTabularStatsRequest = {
  /** Required. List of dimension names to group the aggregations by. */
  dimensions?: string[];
  /** Identifies a sequence of rows. */
  pageToken?: string;
  /** Page size represents the number of rows. */
  pageSize?: number;
  /**
   * Filter further on specific dimension values. Follows the same grammar as custom report's filter
   * expressions. Example, apiproxy eq 'foobar'.
   * https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters
   */
  filter?: string;
  /** Time range for the stats. */
  timeRange?: GoogleTypeInterval3;
  /** Required. List of metrics and their aggregations. */
  metrics?: GoogleCloudApigeeV1MetricAggregation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1QueryTabularStatsRequestSchema: Schema<GoogleCloudApigeeV1QueryTabularStatsRequest> =
  s.object<GoogleCloudApigeeV1QueryTabularStatsRequest>(
    {
      dimensions: s.optional(s.array(s.string())),
      pageToken: s.optional(s.string()),
      pageSize: s.optional(s.int()),
      filter: s.optional(s.string()),
      timeRange: s.optional(s.lazy(() => googleTypeInterval3Schema)),
      metrics: s.optional(s.array(s.lazy(() => googleCloudApigeeV1MetricAggregationSchema))),
    },
    { additionalProperties: s.json() },
  );
