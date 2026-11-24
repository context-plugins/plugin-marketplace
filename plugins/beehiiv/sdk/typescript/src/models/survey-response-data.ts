import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { subscriptionDataSchema, type SubscriptionData } from "./subscription-data.js";
import { surveyResponseAnswerSchema, type SurveyResponseAnswer } from "./survey-response-answer.js";

export type SurveyResponseData = {
  /** An array of answers from the survey response. */
  answers?: SurveyResponseAnswer[];
  /** The time the survey response was created. Measured in seconds since the Unix epoch. */
  created?: number;
  /** The response ID. This is unique to the individual submission. */
  id?: string;
  /** The ID of the survey that the response was submitted to. */
  surveyId?: string;
  subscription?: SubscriptionData;
  /** The date the survey response was updated. Measured in seconds since the Unix epoch. */
  updated?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const surveyResponseDataSchema: Schema<SurveyResponseData> = s.object<SurveyResponseData>(
  {
    answers: s.optional(s.array(s.lazy(() => surveyResponseAnswerSchema))),
    created: s.optional(s.int()),
    id: s.optional(s.string()),
    surveyId: s.optional(s.string()),
    subscription: s.optional(s.lazy(() => subscriptionDataSchema)),
    updated: s.optional(s.int()),
    _keysMap: {
      surveyId: "survey_id",
    },
  },
  { additionalProperties: s.json() },
);
