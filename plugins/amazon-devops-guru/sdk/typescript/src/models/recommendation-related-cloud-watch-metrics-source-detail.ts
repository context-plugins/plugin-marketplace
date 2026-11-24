import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecommendationRelatedCloudWatchMetricsSourceDetail = {
  /** The name of the CloudWatch metric. */
  metricName?: string;
  /** The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics. */
  namespace?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendationRelatedCloudWatchMetricsSourceDetailSchema: Schema<RecommendationRelatedCloudWatchMetricsSourceDetail> =
  s.object<RecommendationRelatedCloudWatchMetricsSourceDetail>(
    {
      metricName: s.optional(s.string()),
      namespace: s.optional(s.string()),
      _keysMap: {
        metricName: "MetricName",
        namespace: "Namespace",
      },
    },
    { additionalProperties: s.json() },
  );
