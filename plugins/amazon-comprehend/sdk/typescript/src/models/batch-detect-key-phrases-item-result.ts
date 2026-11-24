import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { keyPhraseSchema, type KeyPhrase } from "./key-phrase.js";

export type BatchDetectKeyPhrasesItemResult = {
  /** The zero-based index of the document in the input list. */
  index?: number;
  /** One or more KeyPhrase objects, one for each key phrase detected in the document. */
  keyPhrases?: KeyPhrase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDetectKeyPhrasesItemResultSchema: Schema<BatchDetectKeyPhrasesItemResult> =
  s.object<BatchDetectKeyPhrasesItemResult>(
    {
      index: s.optional(s.int()),
      keyPhrases: s.optional(s.array(s.lazy(() => keyPhraseSchema))),
      _keysMap: {
        index: "Index",
        keyPhrases: "KeyPhrases",
      },
    },
    { additionalProperties: s.json() },
  );
