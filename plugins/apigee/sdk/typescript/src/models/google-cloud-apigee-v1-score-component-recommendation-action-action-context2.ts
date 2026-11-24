import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Action context for the action. */
export type GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext2 = {
  /** Documentation link for the action. */
  documentationLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ScoreComponentRecommendationActionActionContext2Schema: Schema<GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext2> =
  s.object<GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext2>(
    {
      documentationLink: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
