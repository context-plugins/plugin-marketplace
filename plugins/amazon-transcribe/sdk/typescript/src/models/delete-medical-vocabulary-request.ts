import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteMedicalVocabularyRequest = {
  /**
   * The name of the custom medical vocabulary you want to delete. Custom medical vocabulary names
   * are case sensitive.
   */
  vocabularyName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteMedicalVocabularyRequestSchema: Schema<DeleteMedicalVocabularyRequest> =
  s.object<DeleteMedicalVocabularyRequest>(
    {
      vocabularyName: s.string(),
      _keysMap: {
        vocabularyName: "VocabularyName",
      },
    },
    { additionalProperties: s.json() },
  );
