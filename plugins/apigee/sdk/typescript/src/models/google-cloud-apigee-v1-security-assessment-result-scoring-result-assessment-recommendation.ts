import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationSchema,
  type GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendation,
} from "./google-cloud-apigee-v1-security-assessment-result-scoring-result-assessment-recommendation-recommendation.js";
import { verdict1Schema, type Verdict1 } from "./verdict1.js";
import { weight1Schema, type Weight1 } from "./weight1.js";

/** The message format of a recommendation from the assessment. */
export type GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendation = {
  /** Score impact indicates the impact on the overall score if the assessment were to pass. */
  scoreImpact?: number;
  /** The display name of the assessment. */
  displayName?: string;
  /** The recommended steps of the assessment. */
  recommendations?: GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendation[];
  /** Verdict indicates the assessment result. */
  verdict?: Verdict1;
  /** The weight of the assessment which was set in the profile. */
  weight?: Weight1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationSchema: Schema<GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendation> =
  s.object<GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendation>(
    {
      scoreImpact: s.optional(s.int()),
      displayName: s.optional(s.string()),
      recommendations: s.optional(
        s.array(
          s.lazy(() =>
            googleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationSchema,
          ),
        ),
      ),
      verdict: s.optional(s.lazy(() => verdict1Schema)),
      weight: s.optional(s.lazy(() => weight1Schema)),
    },
    { additionalProperties: s.json() },
  );
