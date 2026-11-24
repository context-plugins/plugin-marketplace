import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudWatchMetricsDataSummarySchema,
  type CloudWatchMetricsDataSummary,
} from "./cloud-watch-metrics-data-summary.js";
import {
  cloudWatchMetricsDimensionSchema,
  type CloudWatchMetricsDimension,
} from "./cloud-watch-metrics-dimension.js";
import { statSchema, type Stat } from "./stat.js";

export type CloudWatchMetricsDetail = {
  /** The name of the CloudWatch metric. */
  metricName?: string;
  /** The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics. */
  namespace?: string;
  /** An array of CloudWatch dimensions associated with */
  dimensions?: CloudWatchMetricsDimension[];
  /**
   * The type of statistic associated with the CloudWatch metric. For more information, see
   * Statistics in the Amazon CloudWatch User Guide.
   */
  stat?: Stat;
  /**
   * The unit of measure used for the CloudWatch metric. For example, Bytes, Seconds, Count, and
   * Percent.
   */
  unit?: string;
  /** The length of time associated with the CloudWatch metric in number of seconds. */
  period?: number;
  metricDataSummary?: CloudWatchMetricsDataSummary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudWatchMetricsDetailSchema: Schema<CloudWatchMetricsDetail> =
  s.object<CloudWatchMetricsDetail>(
    {
      metricName: s.optional(s.string()),
      namespace: s.optional(s.string()),
      dimensions: s.optional(s.array(s.lazy(() => cloudWatchMetricsDimensionSchema))),
      stat: s.optional(s.lazy(() => statSchema)),
      unit: s.optional(s.string()),
      period: s.optional(s.int()),
      metricDataSummary: s.optional(s.lazy(() => cloudWatchMetricsDataSummarySchema)),
      _keysMap: {
        metricName: "MetricName",
        namespace: "Namespace",
        dimensions: "Dimensions",
        stat: "Stat",
        unit: "Unit",
        period: "Period",
        metricDataSummary: "MetricDataSummary",
      },
    },
    { additionalProperties: s.json() },
  );
