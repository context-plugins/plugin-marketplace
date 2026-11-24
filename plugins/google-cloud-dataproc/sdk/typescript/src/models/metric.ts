import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metricSourceSchema, type MetricSource } from "./metric-source.js";

/** A custom metric. */
export type Metric = {
  /**
   * Optional. Specify one or more Custom metrics
   * (https://cloud.google.com/dataproc/docs/guides/dataproc-metrics#custom_metrics) to collect for
   * the metric course (for the SPARK metric source (any Spark metric
   * (https://spark.apache.org/docs/latest/monitoring.html#metrics) can be specified).Provide
   * metrics in the following format:METRIC_SOURCE:INSTANCE :GROUP:METRIC Use camelcase as
   * appropriate.Examples: yarn:ResourceManager:QueueMetrics:AppsCompleted
   * spark:driver:DAGScheduler:job.allJobs
   * sparkHistoryServer:JVM:Memory:NonHeapMemoryUsage.committed
   * hiveserver2:JVM:Memory:NonHeapMemoryUsage.used Notes: Only the specified overridden metrics are
   * collected for the metric source. For example, if one or more spark:executive metrics are listed
   * as metric overrides, other SPARK metrics are not collected. The collection of the metrics for
   * other enabled custom metric sources is unaffected. For example, if both SPARK and YARN metric
   * sources are enabled, and overrides are provided for Spark metrics only, all YARN metrics are
   * collected.
   */
  metricOverrides?: string[];
  /**
   * Required. A standard set of metrics is collected unless metricOverrides are specified for the
   * metric source (see Custom metrics
   * (https://cloud.google.com/dataproc/docs/guides/dataproc-metrics#custom_metrics) for more
   * information).
   */
  metricSource?: MetricSource;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricSchema: Schema<Metric> = s.object<Metric>(
  {
    metricOverrides: s.optional(s.array(s.string())),
    metricSource: s.optional(s.lazy(() => metricSourceSchema)),
  },
  { additionalProperties: s.json() },
);
