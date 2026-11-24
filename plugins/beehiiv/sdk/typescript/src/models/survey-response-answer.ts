import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { surveyResponseQuestionSchema, type SurveyResponseQuestion } from "./survey-response-question.js";

export type SurveyResponseAnswer = {
  /** The answer provided to the question. */
  answer?: string;
  /** The time the answer was created. Measured in seconds since the Unix epoch. */
  created?: number;
  /** The ID of the answer. */
  id?: number;
  questionData?: SurveyResponseQuestion;
  /** The date the answer was updated. Measured in seconds since the Unix epoch. */
  updated?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const surveyResponseAnswerSchema: Schema<SurveyResponseAnswer> = s.object<SurveyResponseAnswer>(
  {
    answer: s.optional(s.string()),
    created: s.optional(s.int()),
    id: s.optional(s.int()),
    questionData: s.optional(s.lazy(() => surveyResponseQuestionSchema)),
    updated: s.optional(s.int()),
    _keysMap: {
      questionData: "question_data",
    },
  },
  { additionalProperties: s.json() },
);
