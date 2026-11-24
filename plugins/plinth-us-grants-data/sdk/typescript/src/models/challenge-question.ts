import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChallengeQuestion = {
  /** The exact request to make, method and URL. */
  call: string;
  /** What to read out of that response, in plain English. */
  ask: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const challengeQuestionSchema: Schema<ChallengeQuestion> = s.object<ChallengeQuestion>(
  {
    call: s.string(),
    ask: s.string(),
  },
  { additionalProperties: s.json() },
);
