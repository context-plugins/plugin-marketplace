import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { keyPhraseSchema, type KeyPhrase } from "./key-phrase.js";

export type DetectKeyPhrasesResponse = {
  /**
   * A collection of key phrases that Amazon Comprehend identified in the input text. For each key
   * phrase, the response provides the text of the key phrase, where the key phrase begins and ends,
   * and the level of confidence that Amazon Comprehend has in the accuracy of the detection.
   */
  keyPhrases?: KeyPhrase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const detectKeyPhrasesResponseSchema: Schema<DetectKeyPhrasesResponse> =
  s.object<DetectKeyPhrasesResponse>(
    {
      keyPhrases: s.optional(s.array(s.lazy(() => keyPhraseSchema))),
      _keysMap: {
        keyPhrases: "KeyPhrases",
      },
    },
    { additionalProperties: s.json() },
  );
