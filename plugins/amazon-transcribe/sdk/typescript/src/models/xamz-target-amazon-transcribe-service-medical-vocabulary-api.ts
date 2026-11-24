import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi = {
  TranscribeCreateMedicalVocabulary: "Transcribe.CreateMedicalVocabulary",
} as const;
export type XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi =
  | (typeof XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi)[keyof typeof XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi]
  | (string & {});

export const xAmzTargetAmazonTranscribeServiceMedicalVocabularyApiSchema: EnumSchema<XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi> =
  s.enumOf<XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi>(
    XAmzTargetAmazonTranscribeServiceMedicalVocabularyApi,
  );
