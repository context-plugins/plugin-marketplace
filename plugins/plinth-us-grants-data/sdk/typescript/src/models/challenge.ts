import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { challengeQuestionSchema, type ChallengeQuestion } from "./challenge-question.js";

/**
 * Present when the key arrives LOCKED. Until these are answered the key may make only the calls
 * named here.
 */
export type Challenge = {
  questions?: ChallengeQuestion[];
  answerAt?: string;
  /**
   * How many answers this challenge takes and how they are spaced. Running out draws a FRESH
   * challenge rather than locking the key.
   */
  attempts?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const challengeSchema: Schema<Challenge> = s.object<Challenge>(
  {
    questions: s.optional(s.array(s.lazy(() => challengeQuestionSchema))),
    answerAt: s.optional(s.string()),
    attempts: s.optional(s.string()),
    _keysMap: {
      answerAt: "answer_at",
    },
  },
  { additionalProperties: s.json() },
);
