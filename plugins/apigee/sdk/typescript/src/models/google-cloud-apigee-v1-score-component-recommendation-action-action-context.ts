import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Action context are all the relevant details for the action. */
export type GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext = {
  /** Documentation link for the action. */
  documentationLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ScoreComponentRecommendationActionActionContextSchema: Schema<GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext> =
  s.object<GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext>(
    {
      documentationLink: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
