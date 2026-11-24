import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The link for the recommendation. */
export type GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2 =
  {
    /** The link itself. */
    uri?: string;
    /** The text of the url. (ie: "Learn more") */
    text?: string;
    /** Properties the service sent or accepts beyond those declared. */
    additionalProperties?: Record<string, JsonValue>;
  };

export const googleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2Schema: Schema<GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2> =
  s.object<
    GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2
  >(
    {
      uri: s.optional(s.string()),
      text: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
