import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ScoreComponentRecommendationActionActionContext2Schema,
  type GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext2,
} from "./google-cloud-apigee-v1-score-component-recommendation-action-action-context2.js";

/** Action to improve security score. */
export type GoogleCloudApigeeV1ScoreComponentRecommendationAction = {
  /** Description of the action. */
  description?: string;
  /** Action context for the action. */
  actionContext?: GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ScoreComponentRecommendationActionSchema: Schema<GoogleCloudApigeeV1ScoreComponentRecommendationAction> =
  s.object<GoogleCloudApigeeV1ScoreComponentRecommendationAction>(
    {
      description: s.optional(s.string()),
      actionContext: s.optional(
        s.lazy(() => googleCloudApigeeV1ScoreComponentRecommendationActionActionContext2Schema),
      ),
    },
    { additionalProperties: s.json() },
  );
