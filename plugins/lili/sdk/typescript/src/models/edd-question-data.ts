import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EddQuestionData = {
  /** The question */
  question?: string;
  /** The answer */
  answer?: string;
  /** The answer */
  questionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eddQuestionDataSchema: Schema<EddQuestionData> = s.object<EddQuestionData>(
  {
    question: s.optional(s.string()),
    answer: s.optional(s.string()),
    questionId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
