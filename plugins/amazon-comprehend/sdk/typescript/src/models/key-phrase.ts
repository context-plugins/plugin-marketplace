import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type KeyPhrase = {
  /** The level of confidence that Amazon Comprehend has in the accuracy of the detection. */
  score?: number;
  /** The text of a key noun phrase. */
  text?: string;
  /**
   * The zero-based offset from the beginning of the source text to the first character in the key
   * phrase.
   */
  beginOffset?: number;
  /**
   * The zero-based offset from the beginning of the source text to the last character in the key
   * phrase.
   */
  endOffset?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const keyPhraseSchema: Schema<KeyPhrase> = s.object<KeyPhrase>(
  {
    score: s.optional(s.float64()),
    text: s.optional(s.string()),
    beginOffset: s.optional(s.int()),
    endOffset: s.optional(s.int()),
    _keysMap: {
      score: "Score",
      text: "Text",
      beginOffset: "BeginOffset",
      endOffset: "EndOffset",
    },
  },
  { additionalProperties: s.json() },
);
