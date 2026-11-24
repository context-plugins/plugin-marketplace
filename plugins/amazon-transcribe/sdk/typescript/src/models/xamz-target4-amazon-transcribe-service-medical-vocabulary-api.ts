import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi = {
  TranscribeUpdateMedicalVocabulary: "Transcribe.UpdateMedicalVocabulary",
} as const;
export type XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi =
  | (typeof XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi)[keyof typeof XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi]
  | (string & {});

export const xAmzTarget4AmazonTranscribeServiceMedicalVocabularyApiSchema: EnumSchema<XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi> =
  s.enumOf<XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi>(
    XAmzTarget4AmazonTranscribeServiceMedicalVocabularyApi,
  );
