import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A pair of sentences used as reference in source and target languages. */
export type ReferenceSentencePair = {
  /** Source sentence in the sentence pair. */
  sourceSentence?: string;
  /** Target sentence in the sentence pair. */
  targetSentence?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const referenceSentencePairSchema: Schema<ReferenceSentencePair> = s.object<ReferenceSentencePair>(
  {
    sourceSentence: s.optional(s.string()),
    targetSentence: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
