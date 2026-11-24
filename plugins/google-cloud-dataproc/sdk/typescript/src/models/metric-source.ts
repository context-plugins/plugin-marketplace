import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required. A standard set of metrics is collected unless metricOverrides are specified for the
 * metric source (see Custom metrics
 * (https://cloud.google.com/dataproc/docs/guides/dataproc-metrics#custom_metrics) for more
 * information).
 */
export const MetricSource = {
  MetricSourceUnspecified: "METRIC_SOURCE_UNSPECIFIED",
  MonitoringAgentDefaults: "MONITORING_AGENT_DEFAULTS",
  Hdfs: "HDFS",
  Spark: "SPARK",
  Yarn: "YARN",
  SparkHistoryServer: "SPARK_HISTORY_SERVER",
  Hiveserver2: "HIVESERVER2",
  Hivemetastore: "HIVEMETASTORE",
  Flink: "FLINK",
} as const;
export type MetricSource = (typeof MetricSource)[keyof typeof MetricSource] | (string & {});

export const metricSourceSchema: EnumSchema<MetricSource> = s.enumOf<MetricSource>(MetricSource);
