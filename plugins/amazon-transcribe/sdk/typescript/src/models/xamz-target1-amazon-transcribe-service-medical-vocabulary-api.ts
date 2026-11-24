import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi = {
  TranscribeDeleteMedicalVocabulary: "Transcribe.DeleteMedicalVocabulary",
} as const;
export type XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi =
  | (typeof XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi)[keyof typeof XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi]
  | (string & {});

export const xAmzTarget1AmazonTranscribeServiceMedicalVocabularyApiSchema: EnumSchema<XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi> =
  s.enumOf<XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi>(
    XAmzTarget1AmazonTranscribeServiceMedicalVocabularyApi,
  );
