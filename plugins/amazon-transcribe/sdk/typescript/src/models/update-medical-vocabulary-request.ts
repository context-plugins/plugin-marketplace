import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCode4Schema, type LanguageCode4 } from "./language-code4.js";

export type UpdateMedicalVocabularyRequest = {
  /**
   * The name of the custom medical vocabulary you want to update. Custom medical vocabulary names
   * are case sensitive.
   */
  vocabularyName: string;
  /**
   * The language code that represents the language of the entries in the custom vocabulary you want
   * to update. US English (en-US) is the only language supported with Amazon Transcribe Medical.
   */
  languageCode: LanguageCode4;
  /**
   * The Amazon S3 location of the text file that contains your custom medical vocabulary. The URI
   * must be located in the same Amazon Web Services Region as the resource you're calling. Here's
   * an example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt
   */
  vocabularyFileUri: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateMedicalVocabularyRequestSchema: Schema<UpdateMedicalVocabularyRequest> =
  s.object<UpdateMedicalVocabularyRequest>(
    {
      vocabularyName: s.string(),
      languageCode: languageCode4Schema,
      vocabularyFileUri: s.string(),
      _keysMap: {
        vocabularyName: "VocabularyName",
        languageCode: "LanguageCode",
        vocabularyFileUri: "VocabularyFileUri",
      },
    },
    { additionalProperties: s.json() },
  );
