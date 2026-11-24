import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The processing state of your custom vocabulary. If the state is READY, you can use the custom
 * vocabulary in a StartTranscriptionJob request.
 */
export const VocabularyStateAmazonTranscribeServiceVocabulariesApi = {
  Pending: "PENDING",
  Ready: "READY",
  Failed: "FAILED",
} as const;
export type VocabularyStateAmazonTranscribeServiceVocabulariesApi =
  | (typeof VocabularyStateAmazonTranscribeServiceVocabulariesApi)[keyof typeof VocabularyStateAmazonTranscribeServiceVocabulariesApi]
  | (string & {});

export const vocabularyStateAmazonTranscribeServiceVocabulariesApiSchema: EnumSchema<VocabularyStateAmazonTranscribeServiceVocabulariesApi> =
  s.enumOf<VocabularyStateAmazonTranscribeServiceVocabulariesApi>(
    VocabularyStateAmazonTranscribeServiceVocabulariesApi,
  );
