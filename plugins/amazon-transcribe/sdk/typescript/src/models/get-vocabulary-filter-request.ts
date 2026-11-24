import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetVocabularyFilterRequest = {
  /**
   * The name of the custom vocabulary filter you want information about. Custom vocabulary filter
   * names are case sensitive.
   */
  vocabularyFilterName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getVocabularyFilterRequestSchema: Schema<GetVocabularyFilterRequest> =
  s.object<GetVocabularyFilterRequest>(
    {
      vocabularyFilterName: s.string(),
      _keysMap: {
        vocabularyFilterName: "VocabularyFilterName",
      },
    },
    { additionalProperties: s.json() },
  );
