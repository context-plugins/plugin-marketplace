import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationSchema,
  type GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendation,
} from "./google-cloud-apigee-v1-security-assessment-result-scoring-result-assessment-recommendation.js";
import { severitySchema, type Severity } from "./severity.js";

/** The result of the assessment. */
export type GoogleCloudApigeeV1SecurityAssessmentResultScoringResult = {
  /**
   * The time when resource data was last fetched for this resource. This time may be different than
   * when the resource was actually updated due to lag in data collection.
   */
  dataUpdateTime?: string;
  /** The security score of the assessment. */
  score?: number;
  severity?: Severity;
  /**
   * The recommendations of the assessment. The key is the "name" of the assessment (not
   * display_name), and the value are the recommendations.
   */
  assessmentRecommendations?: Record<
    string,
    GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendation
  >;
  /**
   * The number of failed assessments grouped by its weight. Keys are one of the following: "MAJOR",
   * "MODERATE", "MINOR".
   */
  failedAssessmentPerWeight?: Record<string, number>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SecurityAssessmentResultScoringResultSchema: Schema<GoogleCloudApigeeV1SecurityAssessmentResultScoringResult> =
  s.object<GoogleCloudApigeeV1SecurityAssessmentResultScoringResult>(
    {
      dataUpdateTime: s.optional(s.string()),
      score: s.optional(s.int()),
      severity: s.optional(s.lazy(() => severitySchema)),
      assessmentRecommendations: s.optional(
        s.record(
          s.string(),
          s.lazy(() =>
            googleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationSchema,
          ),
        ),
      ),
      failedAssessmentPerWeight: s.optional(s.record(s.string(), s.int())),
    },
    { additionalProperties: s.json() },
  );
