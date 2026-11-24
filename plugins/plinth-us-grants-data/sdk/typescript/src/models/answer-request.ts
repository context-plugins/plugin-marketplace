import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnswerRequest = {
  /**
   * One value per question, in the order given. Compared case-insensitively; "yes"/"true" and
   * "$1,234"/"1234" are equivalent.
   */
  answers: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const answerRequestSchema: Schema<AnswerRequest> = s.object<AnswerRequest>(
  {
    answers: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
