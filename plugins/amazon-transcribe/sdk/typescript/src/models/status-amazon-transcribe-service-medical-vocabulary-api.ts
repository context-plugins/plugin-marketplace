import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Lists all custom medical vocabularies that have the status specified in your request. Custom
 * vocabularies are ordered by creation date, with the newest vocabulary first.
 */
export const StatusAmazonTranscribeServiceMedicalVocabularyApi = {
  Pending: "PENDING",
  Ready: "READY",
  Failed: "FAILED",
} as const;
export type StatusAmazonTranscribeServiceMedicalVocabularyApi =
  | (typeof StatusAmazonTranscribeServiceMedicalVocabularyApi)[keyof typeof StatusAmazonTranscribeServiceMedicalVocabularyApi]
  | (string & {});

export const statusAmazonTranscribeServiceMedicalVocabularyApiSchema: EnumSchema<StatusAmazonTranscribeServiceMedicalVocabularyApi> =
  s.enumOf<StatusAmazonTranscribeServiceMedicalVocabularyApi>(
    StatusAmazonTranscribeServiceMedicalVocabularyApi,
  );
