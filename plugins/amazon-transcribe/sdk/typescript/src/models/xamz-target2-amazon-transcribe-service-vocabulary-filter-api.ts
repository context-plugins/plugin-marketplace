import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi = {
  TranscribeGetVocabularyFilter: "Transcribe.GetVocabularyFilter",
} as const;
export type XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi =
  | (typeof XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi)[keyof typeof XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi]
  | (string & {});

export const xAmzTarget2AmazonTranscribeServiceVocabularyFilterApiSchema: EnumSchema<XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi> =
  s.enumOf<XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi>(
    XAmzTarget2AmazonTranscribeServiceVocabularyFilterApi,
  );
