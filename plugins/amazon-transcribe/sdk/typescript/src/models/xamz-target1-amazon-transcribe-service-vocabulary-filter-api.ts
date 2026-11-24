import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi = {
  TranscribeDeleteVocabularyFilter: "Transcribe.DeleteVocabularyFilter",
} as const;
export type XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi =
  | (typeof XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi)[keyof typeof XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi]
  | (string & {});

export const xAmzTarget1AmazonTranscribeServiceVocabularyFilterApiSchema: EnumSchema<XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi> =
  s.enumOf<XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi>(
    XAmzTarget1AmazonTranscribeServiceVocabularyFilterApi,
  );
