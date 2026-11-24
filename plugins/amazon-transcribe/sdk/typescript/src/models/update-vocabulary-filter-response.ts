import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCode1AmazonTranscribeServiceVocabularyFilterApiSchema,
  type LanguageCode1AmazonTranscribeServiceVocabularyFilterApi,
} from "./language-code1-amazon-transcribe-service-vocabulary-filter-api.js";

export type UpdateVocabularyFilterResponse = {
  /** The name of the updated custom vocabulary filter. */
  vocabularyFilterName?: string;
  /** The language code you selected for your custom vocabulary filter. */
  languageCode?: LanguageCode1AmazonTranscribeServiceVocabularyFilterApi;
  /**
   * The date and time the specified custom vocabulary filter was last updated. Timestamps are in
   * the format YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00
   * represents 12:32 PM UTC-7 on May 4, 2022.
   */
  lastModifiedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateVocabularyFilterResponseSchema: Schema<UpdateVocabularyFilterResponse> =
  s.object<UpdateVocabularyFilterResponse>(
    {
      vocabularyFilterName: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode1AmazonTranscribeServiceVocabularyFilterApiSchema)),
      lastModifiedTime: s.optional(s.dateTime()),
      _keysMap: {
        vocabularyFilterName: "VocabularyFilterName",
        languageCode: "LanguageCode",
        lastModifiedTime: "LastModifiedTime",
      },
    },
    { additionalProperties: s.json() },
  );
