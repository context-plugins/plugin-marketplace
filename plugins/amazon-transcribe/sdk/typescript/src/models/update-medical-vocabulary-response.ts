import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCode1AmazonTranscribeServiceMedicalVocabularyApiSchema,
  type LanguageCode1AmazonTranscribeServiceMedicalVocabularyApi,
} from "./language-code1-amazon-transcribe-service-medical-vocabulary-api.js";
import { vocabularyStateSchema, type VocabularyState } from "./vocabulary-state.js";

export type UpdateMedicalVocabularyResponse = {
  /** The name of the updated custom medical vocabulary. */
  vocabularyName?: string;
  /**
   * The language code you selected for your custom medical vocabulary. US English (en-US) is the
   * only language supported with Amazon Transcribe Medical.
   */
  languageCode?: LanguageCode1AmazonTranscribeServiceMedicalVocabularyApi;
  /**
   * The date and time the specified custom medical vocabulary was last updated. Timestamps are in
   * the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents 12:32 PM UTC-7 on May 4, 2022.
   */
  lastModifiedTime?: Date;
  /**
   * The processing state of your custom medical vocabulary. If the state is READY, you can use the
   * custom vocabulary in a StartMedicalTranscriptionJob request.
   */
  vocabularyState?: VocabularyState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateMedicalVocabularyResponseSchema: Schema<UpdateMedicalVocabularyResponse> =
  s.object<UpdateMedicalVocabularyResponse>(
    {
      vocabularyName: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode1AmazonTranscribeServiceMedicalVocabularyApiSchema)),
      lastModifiedTime: s.optional(s.dateTime()),
      vocabularyState: s.optional(s.lazy(() => vocabularyStateSchema)),
      _keysMap: {
        vocabularyName: "VocabularyName",
        languageCode: "LanguageCode",
        lastModifiedTime: "LastModifiedTime",
        vocabularyState: "VocabularyState",
      },
    },
    { additionalProperties: s.json() },
  );
