import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Contains cluster daemon metrics, such as HDFS and YARN stats.Beta Feature: This report is
 * available for testing purposes only. It may be changed before final release.
 */
export type ClusterMetrics = {
  /** The HDFS metrics. */
  hdfsMetrics?: Record<string, string>;
  /** YARN metrics. */
  yarnMetrics?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clusterMetricsSchema: Schema<ClusterMetrics> = s.object<ClusterMetrics>(
  {
    hdfsMetrics: s.optional(s.record(s.string(), s.string())),
    yarnMetrics: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
