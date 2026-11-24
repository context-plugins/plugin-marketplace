import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The format for a link in the recommendation. */
export type GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink =
  {
    /** The link itself. */
    uri?: string;
    /** The text of the url. (ie: "Learn more") */
    text?: string;
    /** Properties the service sent or accepts beyond those declared. */
    additionalProperties?: Record<string, JsonValue>;
  };

export const googleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLinkSchema: Schema<GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink> =
  s.object<
    GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink
  >(
    {
      uri: s.optional(s.string()),
      text: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
