import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi = {
  TranscribeGetMedicalVocabulary: "Transcribe.GetMedicalVocabulary",
} as const;
export type XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi =
  | (typeof XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi)[keyof typeof XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi]
  | (string & {});

export const xAmzTarget2AmazonTranscribeServiceMedicalVocabularyApiSchema: EnumSchema<XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi> =
  s.enumOf<XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi>(
    XAmzTarget2AmazonTranscribeServiceMedicalVocabularyApi,
  );
