import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi = {
  TranscribeListMedicalVocabularies: "Transcribe.ListMedicalVocabularies",
} as const;
export type XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi =
  | (typeof XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi)[keyof typeof XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi]
  | (string & {});

export const xAmzTarget3AmazonTranscribeServiceMedicalVocabularyApiSchema: EnumSchema<XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi> =
  s.enumOf<XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi>(
    XAmzTarget3AmazonTranscribeServiceMedicalVocabularyApi,
  );
