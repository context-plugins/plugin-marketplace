import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recommendationRelatedCloudWatchMetricsSourceDetailSchema,
  type RecommendationRelatedCloudWatchMetricsSourceDetail,
} from "./recommendation-related-cloud-watch-metrics-source-detail.js";

export type RecommendationRelatedAnomalySourceDetail = {
  /**
   * An array of CloudWatchMetricsDetail objects that contains information about the analyzed
   * metrics that displayed anomalous behavior.
   */
  cloudWatchMetrics?: RecommendationRelatedCloudWatchMetricsSourceDetail[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendationRelatedAnomalySourceDetailSchema: Schema<RecommendationRelatedAnomalySourceDetail> =
  s.object<RecommendationRelatedAnomalySourceDetail>(
    {
      cloudWatchMetrics: s.optional(
        s.array(s.lazy(() => recommendationRelatedCloudWatchMetricsSourceDetailSchema)),
      ),
      _keysMap: {
        cloudWatchMetrics: "CloudWatchMetrics",
      },
    },
    { additionalProperties: s.json() },
  );
