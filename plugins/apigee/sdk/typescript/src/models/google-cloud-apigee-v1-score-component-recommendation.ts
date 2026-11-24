import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ScoreComponentRecommendationActionSchema,
  type GoogleCloudApigeeV1ScoreComponentRecommendationAction,
} from "./google-cloud-apigee-v1-score-component-recommendation-action.js";

/** Recommendation based on security concerns and score. */
export type GoogleCloudApigeeV1ScoreComponentRecommendation = {
  /** Title represents recommendation title. */
  title?: string;
  /**
   * Potential impact of this recommendation on the overall score. This denotes how important this
   * recommendation is to improve the score.
   */
  impact?: number;
  /** Description of the recommendation. */
  description?: string;
  /** Actions for the recommendation to improve the security score. */
  actions?: GoogleCloudApigeeV1ScoreComponentRecommendationAction[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ScoreComponentRecommendationSchema: Schema<GoogleCloudApigeeV1ScoreComponentRecommendation> =
  s.object<GoogleCloudApigeeV1ScoreComponentRecommendation>(
    {
      title: s.optional(s.string()),
      impact: s.optional(s.int()),
      description: s.optional(s.string()),
      actions: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ScoreComponentRecommendationActionSchema))),
    },
    { additionalProperties: s.json() },
  );
