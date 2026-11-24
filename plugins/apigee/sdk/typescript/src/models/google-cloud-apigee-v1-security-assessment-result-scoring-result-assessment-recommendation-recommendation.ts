import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2Schema,
  type GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2,
} from "./google-cloud-apigee-v1-security-assessment-result-scoring-result-assessment-recommendation-recommendation-link2.js";

/** The format of the assessment recommendation. */
export type GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendation = {
  /** The description of the recommendation. */
  description?: string;
  /** The link for the recommendation. */
  link?: GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationSchema: Schema<GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendation> =
  s.object<GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendation>(
    {
      description: s.optional(s.string()),
      link: s.optional(
        s.lazy(() =>
          googleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2Schema,
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
