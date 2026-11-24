import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { challengeQuestionSchema, type ChallengeQuestion } from "./challenge-question.js";

export type ChallengeIssued = {
  code: number;
  message?: string;
  questions: ChallengeQuestion[];
  answerAt: string;
  /**
   * How many answers this challenge takes and how they are spaced. Running out draws a FRESH
   * challenge rather than locking the key.
   */
  attempts?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const challengeIssuedSchema: Schema<ChallengeIssued> = s.object<ChallengeIssued>(
  {
    code: s.int(),
    message: s.optional(s.string()),
    questions: s.array(s.lazy(() => challengeQuestionSchema)),
    answerAt: s.string(),
    attempts: s.optional(s.string()),
    _keysMap: {
      answerAt: "answer_at",
    },
  },
  { additionalProperties: s.json() },
);
