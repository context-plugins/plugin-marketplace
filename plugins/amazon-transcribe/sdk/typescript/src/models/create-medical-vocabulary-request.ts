import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  languageCodeAmazonTranscribeServiceMedicalVocabularyApiSchema,
  type LanguageCodeAmazonTranscribeServiceMedicalVocabularyApi,
} from "./language-code-amazon-transcribe-service-medical-vocabulary-api.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateMedicalVocabularyRequest = {
  /**
   * A unique name, chosen by you, for your new custom medical vocabulary. This name is case
   * sensitive, cannot contain spaces, and must be unique within an Amazon Web Services account. If
   * you try to create a new custom medical vocabulary with the same name as an existing custom
   * medical vocabulary, you get a ConflictException error.
   */
  vocabularyName: string;
  /**
   * The language code that represents the language of the entries in your custom vocabulary. US
   * English (en-US) is the only language supported with Amazon Transcribe Medical.
   */
  languageCode: LanguageCodeAmazonTranscribeServiceMedicalVocabularyApi;
  /**
   * The Amazon S3 location (URI) of the text file that contains your custom medical vocabulary. The
   * URI must be in the same Amazon Web Services Region as the resource you're calling. Here's an
   * example URI path: s3://DOC-EXAMPLE-BUCKET/my-vocab-file.txt
   */
  vocabularyFileUri: string;
  /**
   * Adds one or more custom tags, each in the form of a key:value pair, to a new custom medical
   * vocabulary at the time you create this new custom vocabulary. To learn more about using tags
   * with Amazon Transcribe, refer to Tagging resources.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createMedicalVocabularyRequestSchema: Schema<CreateMedicalVocabularyRequest> =
  s.object<CreateMedicalVocabularyRequest>(
    {
      vocabularyName: s.string(),
      languageCode: languageCodeAmazonTranscribeServiceMedicalVocabularyApiSchema,
      vocabularyFileUri: s.string(),
      tags: s.optional(s.array(s.lazy(() => tagSchema))),
      _keysMap: {
        vocabularyName: "VocabularyName",
        languageCode: "LanguageCode",
        vocabularyFileUri: "VocabularyFileUri",
        tags: "Tags",
      },
    },
    { additionalProperties: s.json() },
  );
