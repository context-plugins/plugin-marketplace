import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SampleUtterance = {
  /**
   * The sample utterance that Amazon Lex uses to build its machine-learning model to recognize
   * intents.
   */
  utterance: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sampleUtteranceSchema: Schema<SampleUtterance> = s.object<SampleUtterance>(
  {
    utterance: s.string(),
  },
  { additionalProperties: s.json() },
);
