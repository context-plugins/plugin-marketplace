import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recommendationRelatedAnomalyResourceSchema,
  type RecommendationRelatedAnomalyResource,
} from "./recommendation-related-anomaly-resource.js";
import {
  recommendationRelatedAnomalySourceDetailSchema,
  type RecommendationRelatedAnomalySourceDetail,
} from "./recommendation-related-anomaly-source-detail.js";

export type RecommendationRelatedAnomaly = {
  /**
   * An array of objects that represent resources in which DevOps Guru detected anomalous behavior.
   * Each object contains the name and type of the resource.
   */
  resources?: RecommendationRelatedAnomalyResource[];
  /**
   * Information about where the anomalous behavior related the recommendation was found. For
   * example, details in Amazon CloudWatch metrics.
   */
  sourceDetails?: RecommendationRelatedAnomalySourceDetail[];
  /** The ID of an anomaly that generated the insight with this recommendation. */
  anomalyId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recommendationRelatedAnomalySchema: Schema<RecommendationRelatedAnomaly> =
  s.object<RecommendationRelatedAnomaly>(
    {
      resources: s.optional(s.array(s.lazy(() => recommendationRelatedAnomalyResourceSchema))),
      sourceDetails: s.optional(s.array(s.lazy(() => recommendationRelatedAnomalySourceDetailSchema))),
      anomalyId: s.optional(s.string()),
      _keysMap: {
        resources: "Resources",
        sourceDetails: "SourceDetails",
        anomalyId: "AnomalyId",
      },
    },
    { additionalProperties: s.json() },
  );
