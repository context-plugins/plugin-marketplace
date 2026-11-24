import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteVocabularyFilterRequest = {
  /**
   * The name of the custom vocabulary filter you want to delete. Custom vocabulary filter names are
   * case sensitive.
   */
  vocabularyFilterName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteVocabularyFilterRequestSchema: Schema<DeleteVocabularyFilterRequest> =
  s.object<DeleteVocabularyFilterRequest>(
    {
      vocabularyFilterName: s.string(),
      _keysMap: {
        vocabularyFilterName: "VocabularyFilterName",
      },
    },
    { additionalProperties: s.json() },
  );
