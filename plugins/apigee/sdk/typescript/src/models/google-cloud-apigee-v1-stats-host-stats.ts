import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DimensionMetricSchema,
  type GoogleCloudApigeeV1DimensionMetric,
} from "./google-cloud-apigee-v1-dimension-metric.js";
import {
  googleCloudApigeeV1MetricSchema,
  type GoogleCloudApigeeV1Metric,
} from "./google-cloud-apigee-v1-metric.js";

/**
 * Encapsulates the hostname wrapper: ``` "hosts": [ { "metrics": [ { "name": "sum(message_count)",
 * "values": [ "2.52056245E8" ] } ], "name": "example.com" } ]```
 */
export type GoogleCloudApigeeV1StatsHostStats = {
  /** Hostname used in query. */
  name?: string;
  /**
   * In the final response, only one of the following fields will be present based on the dimensions
   * provided. If no dimensions are provided, then only the top-level metrics are provided. If
   * dimensions are included, then there will be a top-level dimensions field under hostnames which
   * will contain metrics values and the dimension name. Example: ``` "hosts": [ { "dimensions": [ {
   * "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ] } ], "name":
   * "nit_proxy" } ], "name": "example.com" } ]``` OR ```"hosts": [ { "metrics": [ { "name":
   * "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "example.com" } ]``` List of
   * metric values.
   */
  metrics?: GoogleCloudApigeeV1Metric[];
  /** List of metrics grouped under dimensions. */
  dimensions?: GoogleCloudApigeeV1DimensionMetric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1StatsHostStatsSchema: Schema<GoogleCloudApigeeV1StatsHostStats> =
  s.object<GoogleCloudApigeeV1StatsHostStats>(
    {
      name: s.optional(s.string()),
      metrics: s.optional(s.array(s.lazy(() => googleCloudApigeeV1MetricSchema))),
      dimensions: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DimensionMetricSchema))),
    },
    { additionalProperties: s.json() },
  );
