import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SurveyResponseQuestion = {
  /** The answer provided to the question. */
  answer?: string;
  /** The question that was asked. */
  prompt?: string;
  /** The type of question asked (e.g. multiple choice). */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const surveyResponseQuestionSchema: Schema<SurveyResponseQuestion> = s.object<SurveyResponseQuestion>(
  {
    answer: s.optional(s.string()),
    prompt: s.optional(s.string()),
    type: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
