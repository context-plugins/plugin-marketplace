import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The method of the vocabulary filter for the HealthScribe streaming session. */
export const VocabularyFilterMethodAmazonTranscribeServiceOperationsApi = {
  Remove: "remove",
  Mask: "mask",
  Tag: "tag",
} as const;
export type VocabularyFilterMethodAmazonTranscribeServiceOperationsApi =
  | (typeof VocabularyFilterMethodAmazonTranscribeServiceOperationsApi)[keyof typeof VocabularyFilterMethodAmazonTranscribeServiceOperationsApi]
  | (string & {});

export const vocabularyFilterMethodAmazonTranscribeServiceOperationsApiSchema: EnumSchema<VocabularyFilterMethodAmazonTranscribeServiceOperationsApi> =
  s.enumOf<VocabularyFilterMethodAmazonTranscribeServiceOperationsApi>(
    VocabularyFilterMethodAmazonTranscribeServiceOperationsApi,
  );
