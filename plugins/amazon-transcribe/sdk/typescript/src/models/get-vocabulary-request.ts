import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetVocabularyRequest = {
  /**
   * The name of the custom vocabulary you want information about. Custom vocabulary names are case
   * sensitive.
   */
  vocabularyName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getVocabularyRequestSchema: Schema<GetVocabularyRequest> = s.object<GetVocabularyRequest>(
  {
    vocabularyName: s.string(),
    _keysMap: {
      vocabularyName: "VocabularyName",
    },
  },
  { additionalProperties: s.json() },
);
