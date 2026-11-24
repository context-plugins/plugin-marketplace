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
 * Encapsulates the environment wrapper: ``` "environments": [ { "metrics": [ { "name":
 * "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "prod" } ]```
 */
export type GoogleCloudApigeeV1StatsEnvironmentStats = {
  /**
   * In the final response, only one of the following fields will be present based on the dimensions
   * provided. If no dimensions are provided, then only top-level metrics is provided. If dimensions
   * are included, then there will be a top-level dimensions field under environments which will
   * contain metrics values and the dimension name. Example: ``` "environments": [ { "dimensions": [
   * { "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ] } ], "name":
   * "nit_proxy" } ], "name": "prod" } ]``` or ```"environments": [ { "metrics": [ { "name":
   * "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "prod" } ]``` List of metric
   * values.
   */
  metrics?: GoogleCloudApigeeV1Metric[];
  /** Name of the environment. */
  name?: string;
  /** List of metrics grouped under dimensions. */
  dimensions?: GoogleCloudApigeeV1DimensionMetric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1StatsEnvironmentStatsSchema: Schema<GoogleCloudApigeeV1StatsEnvironmentStats> =
  s.object<GoogleCloudApigeeV1StatsEnvironmentStats>(
    {
      metrics: s.optional(s.array(s.lazy(() => googleCloudApigeeV1MetricSchema))),
      name: s.optional(s.string()),
      dimensions: s.optional(s.array(s.lazy(() => googleCloudApigeeV1DimensionMetricSchema))),
    },
    { additionalProperties: s.json() },
  );
