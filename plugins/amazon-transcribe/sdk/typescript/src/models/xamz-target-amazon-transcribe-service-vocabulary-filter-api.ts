import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonTranscribeServiceVocabularyFilterApi = {
  TranscribeCreateVocabularyFilter: "Transcribe.CreateVocabularyFilter",
} as const;
export type XAmzTargetAmazonTranscribeServiceVocabularyFilterApi =
  | (typeof XAmzTargetAmazonTranscribeServiceVocabularyFilterApi)[keyof typeof XAmzTargetAmazonTranscribeServiceVocabularyFilterApi]
  | (string & {});

export const xAmzTargetAmazonTranscribeServiceVocabularyFilterApiSchema: EnumSchema<XAmzTargetAmazonTranscribeServiceVocabularyFilterApi> =
  s.enumOf<XAmzTargetAmazonTranscribeServiceVocabularyFilterApi>(
    XAmzTargetAmazonTranscribeServiceVocabularyFilterApi,
  );
